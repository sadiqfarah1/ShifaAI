"""
Shifa AI Demo Backend
Pre-HIPAA prototype with in-memory data (no PHI)
Run with: uvicorn demo_backend:app --reload --port 8000
"""

from fastapi import FastAPI, HTTPException, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from pydantic import BaseModel
from typing import List, Optional, Dict
from datetime import datetime, timedelta
from enum import Enum
import threading
import time
import os

# Environment configuration
PILOT_NO_PHI = os.getenv("PILOT_NO_PHI", "true").lower() == "true"
DEMO_ACCELERATE = os.getenv("DEMO_ACCELERATE", "true").lower() == "true"

# FastAPI app
app = FastAPI(
    title="Shifa AI Demo API",
    description="Pre-HIPAA pilot - de-identified data only",
    version="1.0.0"
)

# CORS middleware for frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://*.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================================================================
# DATA MODELS
# ============================================================================

class RiskLevel(str, Enum):
    GREEN = "green"
    YELLOW = "yellow"
    RED = "red"

class AlertState(str, Enum):
    OPEN = "open"
    RESOLVED = "resolved"

class Patient(BaseModel):
    id: int
    external_ref: str
    cohort: str
    created_at: datetime

class Enrollment(BaseModel):
    id: int
    patient_id: int
    program: str
    start_at: datetime
    status: str

class ScheduledMessage(BaseModel):
    id: int
    enrollment_id: int
    due_at: datetime
    state: str
    template_body: str

class MessageLog(BaseModel):
    id: int
    direction: str  # inbound/outbound
    body_redacted: str
    status: str
    created_at: datetime
    patient_id: Optional[int] = None

class TriageResult(BaseModel):
    id: int
    message_id: int
    risk: RiskLevel
    reason: str
    source: str
    created_at: datetime

class Alert(BaseModel):
    id: int
    patient_id: int
    triage_id: int
    level: RiskLevel
    state: AlertState
    created_at: datetime
    resolved_at: Optional[datetime] = None

# ============================================================================
# IN-MEMORY DATA STORE
# ============================================================================

patients: Dict[int, Patient] = {}
enrollments: Dict[int, Enrollment] = {}
scheduled_messages: Dict[int, ScheduledMessage] = {}
message_logs: Dict[int, MessageLog] = {}
triage_results: Dict[int, TriageResult] = {}
alerts: Dict[int, Alert] = {}

# Counters for IDs
next_patient_id = 1
next_enrollment_id = 1
next_message_id = 1
next_triage_id = 1
next_alert_id = 1
next_scheduled_id = 1

# ============================================================================
# HELPER FUNCTIONS
# ============================================================================

def redact_text(text: str) -> str:
    """Redact potential PHI from text"""
    if not PILOT_NO_PHI:
        return text
    
    # Remove digits (phone numbers, SSN, etc.)
    import re
    text = re.sub(r'\d{3}[-.]?\d{3}[-.]?\d{4}', '[PHONE_REDACTED]', text)
    text = re.sub(r'\d{3}-\d{2}-\d{4}', '[SSN_REDACTED]', text)
    text = re.sub(r'\b\d{10,}\b', '[NUMBER_REDACTED]', text)
    
    return text

def rules_triage(text: str) -> tuple[RiskLevel, str]:
    """Apply rules-based triage logic"""
    text_lower = text.lower()
    
    # RED - Critical symptoms
    red_keywords = ["chest pain", "shortness of breath", "can't breathe", "cant breathe", 
                    "severe", "bleeding", "emergency", "911"]
    for keyword in red_keywords:
        if keyword in text_lower:
            return RiskLevel.RED, f"Critical symptom detected: '{keyword}'"
    
    # YELLOW - Warning symptoms
    yellow_keywords = ["swelling", "dizzy", "fever", "nausea", "pain", "headache", 
                      "weight gain", "yes", "cough", "tired", "weak"]
    for keyword in yellow_keywords:
        if keyword in text_lower:
            return RiskLevel.YELLOW, f"Warning symptom detected: '{keyword}'"
    
    # GREEN - No concerns
    return RiskLevel.GREEN, "No concerning symptoms detected"

# ============================================================================
# SCHEDULER (Background Thread)
# ============================================================================

def scheduler_worker():
    """Background thread to process scheduled messages"""
    while True:
        try:
            now = datetime.utcnow()
            
            # Check for due messages
            for msg_id, msg in list(scheduled_messages.items()):
                if msg.state == "pending" and msg.due_at <= now:
                    # "Send" the message by logging it
                    global next_message_id
                    log = MessageLog(
                        id=next_message_id,
                        direction="outbound",
                        body_redacted=msg.template_body,
                        status="sent",
                        created_at=now,
                        patient_id=enrollments[msg.enrollment_id].patient_id
                    )
                    message_logs[next_message_id] = log
                    next_message_id += 1
                    
                    # Mark as sent
                    msg.state = "sent"
                    print(f"✉️  Sent scheduled message {msg_id}: {msg.template_body[:50]}...")
            
            time.sleep(1)  # Check every second
        except Exception as e:
            print(f"Scheduler error: {e}")
            time.sleep(5)

# Start scheduler in background
scheduler_thread = threading.Thread(target=scheduler_worker, daemon=True)
scheduler_thread.start()

# ============================================================================
# API ROUTES
# ============================================================================

@app.get("/healthz")
async def health_check():
    """Health check endpoint"""
    return {
        "ok": True,
        "time": datetime.utcnow().isoformat(),
        "pilot_no_phi": PILOT_NO_PHI,
        "demo_accelerate": DEMO_ACCELERATE
    }

@app.post("/api/patients")
async def create_patient(external_ref: str, cohort: str = "general"):
    """Create a new patient (de-identified only)"""
    global next_patient_id
    
    # Validate no PHI
    if PILOT_NO_PHI and any(c.isdigit() for c in external_ref):
        raise HTTPException(400, "Cannot accept identifiable data in pilot mode")
    
    patient = Patient(
        id=next_patient_id,
        external_ref=external_ref,
        cohort=cohort,
        created_at=datetime.utcnow()
    )
    patients[next_patient_id] = patient
    next_patient_id += 1
    
    return patient

@app.get("/api/patients")
async def list_patients():
    """List all patients"""
    return list(patients.values())

@app.post("/api/enrollments")
async def create_enrollment(patient_id: int, program: str = "standard"):
    """Enroll a patient and schedule follow-ups"""
    global next_enrollment_id, next_scheduled_id
    
    if patient_id not in patients:
        raise HTTPException(404, "Patient not found")
    
    # Create enrollment
    enrollment = Enrollment(
        id=next_enrollment_id,
        patient_id=patient_id,
        program=program,
        start_at=datetime.utcnow(),
        status="active"
    )
    enrollments[next_enrollment_id] = enrollment
    
    # Schedule first message (8 seconds for demo if accelerated, otherwise 1 day)
    delay = 8 if DEMO_ACCELERATE else 86400
    scheduled_msg = ScheduledMessage(
        id=next_scheduled_id,
        enrollment_id=next_enrollment_id,
        due_at=datetime.utcnow() + timedelta(seconds=delay),
        state="pending",
        template_body="Hi! How are you feeling today? Any swelling, fever, or shortness of breath? Reply YES/NO or describe."
    )
    scheduled_messages[next_scheduled_id] = scheduled_msg
    
    next_enrollment_id += 1
    next_scheduled_id += 1
    
    return enrollment

@app.get("/api/alerts")
async def list_alerts(state: Optional[AlertState] = None):
    """List alerts (optionally filtered by state)"""
    result = list(alerts.values())
    
    if state:
        result = [a for a in result if a.state == state]
    
    # Enrich with patient and triage info
    enriched = []
    for alert in result:
        patient = patients.get(alert.patient_id)
        triage = triage_results.get(alert.triage_id)
        
        enriched.append({
            **alert.dict(),
            "patient_ref": patient.external_ref if patient else "unknown",
            "triage_reason": triage.reason if triage else ""
        })
    
    return enriched

@app.post("/api/alerts/resolve")
async def resolve_alert(alert_id: int):
    """Resolve an alert"""
    if alert_id not in alerts:
        raise HTTPException(404, "Alert not found")
    
    alert = alerts[alert_id]
    alert.state = AlertState.RESOLVED
    alert.resolved_at = datetime.utcnow()
    
    return alert

@app.post("/api/sim/inbound")
async def simulate_inbound(patient_id: int = Form(...), message: str = Form(...)):
    """Simulate an inbound message from a patient"""
    global next_message_id, next_triage_id, next_alert_id
    
    if patient_id not in patients:
        raise HTTPException(404, "Patient not found")
    
    # Redact message
    redacted = redact_text(message)
    
    # Log the message
    msg_log = MessageLog(
        id=next_message_id,
        direction="inbound",
        body_redacted=redacted,
        status="received",
        created_at=datetime.utcnow(),
        patient_id=patient_id
    )
    message_logs[next_message_id] = msg_log
    current_msg_id = next_message_id
    next_message_id += 1
    
    # Triage the message
    risk, reason = rules_triage(redacted)
    
    triage = TriageResult(
        id=next_triage_id,
        message_id=current_msg_id,
        risk=risk,
        reason=reason,
        source="rules_engine",
        created_at=datetime.utcnow()
    )
    triage_results[next_triage_id] = triage
    current_triage_id = next_triage_id
    next_triage_id += 1
    
    # Create alert if YELLOW or RED
    if risk in [RiskLevel.YELLOW, RiskLevel.RED]:
        alert = Alert(
            id=next_alert_id,
            patient_id=patient_id,
            triage_id=current_triage_id,
            level=risk,
            state=AlertState.OPEN,
            created_at=datetime.utcnow()
        )
        alerts[next_alert_id] = alert
        next_alert_id += 1
    
    return triage

@app.get("/debug/logs")
async def debug_logs():
    """Debug endpoint to view message logs"""
    return list(message_logs.values())

# ============================================================================
# SIMPLE HTML UI
# ============================================================================

@app.get("/", response_class=HTMLResponse)
async def homepage():
    """Simple HTML UI for demo"""
    open_alerts = [a for a in alerts.values() if a.state == AlertState.OPEN]
    
    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Shifa AI Demo</title>
        <style>
            body {{ font-family: system-ui, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; }}
            .pill {{ display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }}
            .pill-warning {{ background: #FEF3C7; color: #92400E; }}
            .alert {{ border: 1px solid #E5E7EB; border-radius: 8px; padding: 16px; margin: 12px 0; }}
            .alert-red {{ border-left: 4px solid #EF4444; }}
            .alert-yellow {{ border-left: 4px solid #F59E0B; }}
            .alert-green {{ border-left: 4px solid #10B981; }}
            button {{ background: #0D9488; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; }}
            button:hover {{ background: #0F766E; }}
            input, textarea {{ width: 100%; padding: 8px; border: 1px solid #D1D5DB; border-radius: 6px; margin: 8px 0; }}
            h1 {{ color: #0F172A; }}
            h2 {{ color: #475569; font-size: 20px; }}
        </style>
    </head>
    <body>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <h1>Shifa AI Demo</h1>
            <span class="pill pill-warning">🛡️ Pre-HIPAA • De-identified only</span>
        </div>
        
        <h2>Open Alerts ({len(open_alerts)})</h2>
        <div id="alerts">
    """
    
    if not open_alerts:
        html += "<p style='color: #64748B;'>No open alerts</p>"
    else:
        for alert in open_alerts:
            patient = patients.get(alert.patient_id)
            triage = triage_results.get(alert.triage_id)
            
            html += f"""
            <div class="alert alert-{alert.level.value}">
                <strong>Alert #{alert.id}</strong> - 
                <span style="text-transform: uppercase; color: {'#EF4444' if alert.level == RiskLevel.RED else '#F59E0B'};">{alert.level.value}</span><br>
                Patient: {patient.external_ref if patient else 'unknown'}<br>
                Reason: {triage.reason if triage else ''}<br>
                Created: {alert.created_at.strftime('%Y-%m-%d %H:%M:%S')}<br>
                <form action="/resolve" method="post" style="margin-top: 8px;">
                    <input type="hidden" name="alert_id" value="{alert.id}">
                    <button type="submit">Resolve</button>
                </form>
            </div>
            """
    
    html += f"""
        </div>
        
        <h2>Simulate Patient Reply</h2>
        <form action="/api/sim/inbound" method="post">
            <label>Patient ID:</label>
            <input type="number" name="patient_id" value="1" required>
            
            <label>Message:</label>
            <textarea name="message" rows="3" placeholder="I have swelling and shortness of breath" required></textarea>
            
            <button type="submit">Send Reply</button>
        </form>
        
        <hr style="margin: 32px 0;">
        <p style="color: #64748B; font-size: 14px;">
            Total patients: {len(patients)} | 
            Total enrollments: {len(enrollments)} | 
            Messages sent: {len([m for m in message_logs.values() if m.direction == 'outbound'])}
        </p>
    </body>
    </html>
    """
    
    return html

@app.post("/resolve", response_class=HTMLResponse)
async def resolve_from_ui(alert_id: int = Form(...)):
    """Resolve alert from HTML form"""
    if alert_id in alerts:
        alerts[alert_id].state = AlertState.RESOLVED
        alerts[alert_id].resolved_at = datetime.utcnow()
    
    return """
    <html>
    <head>
        <meta http-equiv="refresh" content="0; url=/">
    </head>
    <body>Alert resolved, redirecting...</body>
    </html>
    """

# ============================================================================
# SEED DATA
# ============================================================================

@app.on_event("startup")
async def seed_data():
    """Seed demo data on startup"""
    global next_patient_id, next_enrollment_id, next_scheduled_id
    
    # Create demo patient
    patient = Patient(
        id=1,
        external_ref="pt_demo_001",
        cohort="heart_failure",
        created_at=datetime.utcnow()
    )
    patients[1] = patient
    next_patient_id = 2
    
    # Create enrollment
    enrollment = Enrollment(
        id=1,
        patient_id=1,
        program="standard",
        start_at=datetime.utcnow(),
        status="active"
    )
    enrollments[1] = enrollment
    next_enrollment_id = 2
    
    # Schedule first message
    delay = 8 if DEMO_ACCELERATE else 86400
    scheduled_msg = ScheduledMessage(
        id=1,
        enrollment_id=1,
        due_at=datetime.utcnow() + timedelta(seconds=delay),
        state="pending",
        template_body="Hi! How are you feeling? Any swelling, fever, or shortness of breath?"
    )
    scheduled_messages[1] = scheduled_msg
    next_scheduled_id = 2
    
    print("✅ Demo data seeded: 1 patient, 1 enrollment, 1 scheduled message")
    print(f"🚀 Shifa AI Demo running - PILOT_NO_PHI={PILOT_NO_PHI}, DEMO_ACCELERATE={DEMO_ACCELERATE}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
