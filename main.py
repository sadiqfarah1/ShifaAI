from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from typing import List, Optional, Dict, Any
import os
from datetime import datetime, timedelta
import json
import asyncio
from twilio.rest import Client
from twilio.twiml.messaging_response import MessagingResponse
import openai
import anthropic
from passlib.context import CryptContext
from jose import JWTError, jwt
import httpx

# Initialize FastAPI app
app = FastAPI(
    title="Shifa AI - Care Transition Companion",
    description="AI-powered post-discharge follow-up system",
    version="2.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Security
security = HTTPBearer()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
SECRET_KEY = os.environ.get("SECRET_KEY", "your-secret-key-here")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Twilio Configuration
TWILIO_ACCOUNT_SID = os.environ.get("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.environ.get("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER = os.environ.get("TWILIO_PHONE_NUMBER")

# LLM Configuration
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY")

# Initialize clients
twilio_client = None
if TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN:
    twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

if OPENAI_API_KEY:
    openai.api_key = OPENAI_API_KEY

anthropic_client = None
if ANTHROPIC_API_KEY:
    anthropic_client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

# In-memory storage (replace with database later)
patients_db = []
messages_db = []
users_db = []
patient_id_counter = 1
message_id_counter = 1
user_id_counter = 1

# Sample users (replace with proper user management)
users_db.append({
    "id": 1,
    "email": "admin@shifaai.com",
    "hashed_password": pwd_context.hash("admin123"),
    "role": "admin",
    "name": "Admin User"
})

# Authentication functions
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(credentials.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    
    user = next((u for u in users_db if u["email"] == email), None)
    if user is None:
        raise credentials_exception
    return user

# AI Triage Functions
async def analyze_patient_response(response_text: str, patient_context: Dict[str, Any]) -> Dict[str, Any]:
    """Analyze patient response using AI to determine risk level"""
    
    prompt = f"""
    Analyze this patient response for risk assessment:
    
    Patient Context: {json.dumps(patient_context, indent=2)}
    Patient Response: "{response_text}"
    
    Classify the risk level as:
    - GREEN: Low risk, routine follow-up
    - YELLOW: Medium risk, needs attention
    - RED: High risk, immediate intervention needed
    
    Consider factors like:
    - Medication adherence
    - Symptom severity
    - Emotional state
    - Understanding of instructions
    - Any concerning statements
    
    Respond with JSON format:
    {{
        "risk_level": "GREEN|YELLOW|RED",
        "confidence": 0.0-1.0,
        "reasoning": "Brief explanation",
        "recommended_actions": ["action1", "action2"],
        "urgency": "low|medium|high"
    }}
    """
    
    try:
        if anthropic_client:
            response = anthropic_client.messages.create(
                model="claude-3-sonnet-20240229",
                max_tokens=500,
                messages=[{"role": "user", "content": prompt}]
            )
            result = json.loads(response.content[0].text)
        elif OPENAI_API_KEY:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": prompt}],
                max_tokens=500
            )
            result = json.loads(response.choices[0].message.content)
        else:
            # Fallback rule-based analysis
            result = {
                "risk_level": "YELLOW" if any(word in response_text.lower() for word in ["pain", "worse", "confused", "can't"]) else "GREEN",
                "confidence": 0.7,
                "reasoning": "Rule-based analysis",
                "recommended_actions": ["Continue monitoring"],
                "urgency": "medium"
            }
    except Exception as e:
        print(f"AI analysis error: {e}")
        result = {
            "risk_level": "YELLOW",
            "confidence": 0.5,
            "reasoning": "Analysis failed, defaulting to medium risk",
            "recommended_actions": ["Manual review needed"],
            "urgency": "medium"
        }
    
    return result

# SMS Functions
async def send_sms(to_phone: str, message: str) -> Dict[str, Any]:
    """Send SMS using Twilio"""
    if not twilio_client:
        return {"status": "error", "message": "Twilio not configured"}
    
    try:
        message_obj = twilio_client.messages.create(
            body=message,
            from_=TWILIO_PHONE_NUMBER,
            to=to_phone
        )
        return {
            "status": "sent",
            "message_sid": message_obj.sid,
            "to": to_phone,
            "timestamp": datetime.now().isoformat()
        }
    except Exception as e:
        return {"status": "error", "message": str(e)}

# API Endpoints
@app.get("/")
async def root():
    return {
        "message": "Shifa AI - Care Transition Companion API",
        "status": "running",
        "version": "2.0.0",
        "features": [
            "Patient Management",
            "SMS Messaging",
            "AI Triage",
            "Authentication",
            "Real-time Notifications"
        ],
        "timestamp": datetime.now().isoformat()
    }

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "services": {
            "twilio": "configured" if twilio_client else "not configured",
            "openai": "configured" if OPENAI_API_KEY else "not configured",
            "anthropic": "configured" if anthropic_client else "not configured"
        }
    }

# Authentication endpoints
@app.post("/api/auth/login")
async def login(credentials: Dict[str, str]):
    """Login endpoint"""
    email = credentials.get("email")
    password = credentials.get("password")
    
    if not email or not password:
        raise HTTPException(status_code=400, detail="Email and password required")
    
    user = next((u for u in users_db if u["email"] == email), None)
    if not user or not verify_password(password, user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user["email"]}, expires_delta=access_token_expires
    )
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": user["id"],
            "email": user["email"],
            "name": user["name"],
            "role": user["role"]
        }
    }

# Patient Management
@app.post("/api/patients")
async def create_patient(patient_data: Dict[str, Any], current_user: dict = Depends(get_current_user)):
    """Create a new patient"""
    global patient_id_counter
    
    if not patient_data.get("name") or not patient_data.get("phone"):
        raise HTTPException(status_code=400, detail="Name and phone are required")
    
    new_patient = {
        "id": patient_id_counter,
        "name": patient_data["name"],
        "phone": patient_data["phone"],
        "email": patient_data.get("email"),
        "discharge_date": patient_data.get("discharge_date", ""),
        "diagnosis": patient_data.get("diagnosis", ""),
        "medications": patient_data.get("medications", []),
        "risk_level": "GREEN",
        "status": "active",
        "created_by": current_user["id"],
        "created_at": datetime.now().isoformat()
    }
    
    patients_db.append(new_patient)
    patient_id_counter += 1
    
    # Send welcome message
    welcome_msg = f"Hello {new_patient['name']}, welcome to Shifa AI care monitoring. We'll check in with you regularly to ensure your recovery goes smoothly."
    await send_sms(new_patient["phone"], welcome_msg)
    
    return new_patient

@app.get("/api/patients")
async def get_patients(current_user: dict = Depends(get_current_user)):
    """Get all patients"""
    return patients_db

@app.get("/api/patients/{patient_id}")
async def get_patient(patient_id: int, current_user: dict = Depends(get_current_user)):
    """Get a specific patient"""
    patient = next((p for p in patients_db if p["id"] == patient_id), None)
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient

# Message Management
@app.post("/api/messages/send")
async def send_message(message_data: Dict[str, Any], current_user: dict = Depends(get_current_user)):
    """Send a message to a patient"""
    patient_id = message_data.get("patient_id")
    message = message_data.get("message")
    
    if not patient_id or not message:
        raise HTTPException(status_code=400, detail="patient_id and message are required")
    
    patient = next((p for p in patients_db if p["id"] == patient_id), None)
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    
    # Send SMS
    sms_result = await send_sms(patient["phone"], message)
    
    # Store message
    global message_id_counter
    new_message = {
        "id": message_id_counter,
        "patient_id": patient_id,
        "message": message,
        "direction": "outbound",
        "status": sms_result.get("status", "sent"),
        "sent_by": current_user["id"],
        "timestamp": datetime.now().isoformat()
    }
    messages_db.append(new_message)
    message_id_counter += 1
    
    return {
        "message": new_message,
        "sms_result": sms_result
    }

@app.post("/api/messages/webhook")
async def twilio_webhook(request: Dict[str, Any]):
    """Handle incoming SMS from Twilio"""
    from_phone = request.get("From")
    message_body = request.get("Body")
    
    if not from_phone or not message_body:
        raise HTTPException(status_code=400, detail="Missing phone or message")
    
    # Find patient by phone
    patient = next((p for p in patients_db if p["phone"] == from_phone), None)
    if not patient:
        # Create unknown patient
        patient = {
            "id": patient_id_counter,
            "name": "Unknown Patient",
            "phone": from_phone,
            "email": "",
            "discharge_date": "",
            "diagnosis": "",
            "medications": [],
            "risk_level": "YELLOW",
            "status": "active",
            "created_by": 1,
            "created_at": datetime.now().isoformat()
        }
        patients_db.append(patient)
        patient_id_counter += 1
    
    # Store incoming message
    global message_id_counter
    incoming_message = {
        "id": message_id_counter,
        "patient_id": patient["id"],
        "message": message_body,
        "direction": "inbound",
        "status": "received",
        "timestamp": datetime.now().isoformat()
    }
    messages_db.append(incoming_message)
    message_id_counter += 1
    
    # AI Triage Analysis
    triage_result = await analyze_patient_response(message_body, patient)
    
    # Update patient risk level
    patient["risk_level"] = triage_result["risk_level"]
    
    # Auto-response based on risk level
    if triage_result["risk_level"] == "RED":
        auto_response = "Thank you for your message. We're concerned about your condition. Please contact your healthcare provider immediately or go to the emergency room if symptoms are severe."
    elif triage_result["risk_level"] == "YELLOW":
        auto_response = "Thank you for your update. We'll have a healthcare provider review your message and get back to you soon."
    else:
        auto_response = "Thank you for your update. We're glad to hear you're doing well. Continue following your care plan."
    
    # Send auto-response
    await send_sms(from_phone, auto_response)
    
    return {
        "message": "Webhook processed",
        "patient_id": patient["id"],
        "triage_result": triage_result
    }

@app.get("/api/messages/{patient_id}")
async def get_patient_messages(patient_id: int, current_user: dict = Depends(get_current_user)):
    """Get messages for a specific patient"""
    patient_messages = [m for m in messages_db if m["patient_id"] == patient_id]
    return patient_messages

@app.get("/api/stats")
async def get_stats(current_user: dict = Depends(get_current_user)):
    """Get comprehensive statistics"""
    total_patients = len(patients_db)
    active_patients = len([p for p in patients_db if p["status"] == "active"])
    total_messages = len(messages_db)
    
    risk_distribution = {}
    for patient in patients_db:
        risk = patient.get("risk_level", "UNKNOWN")
        risk_distribution[risk] = risk_distribution.get(risk, 0) + 1
    
    return {
        "total_patients": total_patients,
        "active_patients": active_patients,
        "total_messages": total_messages,
        "risk_distribution": risk_distribution,
        "timestamp": datetime.now().isoformat()
    }

@app.get("/api/docs")
async def get_docs():
    """Enhanced API documentation"""
    return {
        "version": "2.0.0",
        "features": [
            "Patient Management with AI Triage",
            "SMS Messaging via Twilio",
            "Authentication & Authorization",
            "Real-time Risk Assessment",
            "Automated Responses"
        ],
        "endpoints": {
            "Authentication": {
                "POST /api/auth/login": "Login (requires: email, password)"
            },
            "Patients": {
                "GET /api/patients": "List all patients (requires auth)",
                "POST /api/patients": "Create patient (requires auth)",
                "GET /api/patients/{id}": "Get specific patient (requires auth)"
            },
            "Messages": {
                "POST /api/messages/send": "Send message (requires auth)",
                "POST /api/messages/webhook": "Twilio webhook (no auth)",
                "GET /api/messages/{patient_id}": "Get patient messages (requires auth)"
            },
            "System": {
                "GET /": "API info",
                "GET /health": "Health check",
                "GET /api/stats": "Statistics (requires auth)",
                "GET /api/docs": "This documentation"
            }
        },
        "example_requests": {
            "login": {
                "url": "POST /api/auth/login",
                "body": {"email": "admin@shifaai.com", "password": "admin123"}
            },
            "create_patient": {
                "url": "POST /api/patients",
                "headers": {"Authorization": "Bearer <token>"},
                "body": {
                    "name": "John Doe",
                    "phone": "+1234567890",
                    "email": "john@example.com",
                    "diagnosis": "Post-surgical recovery",
                    "medications": ["Pain medication", "Antibiotics"]
                }
            },
            "send_message": {
                "url": "POST /api/messages/send",
                "headers": {"Authorization": "Bearer <token>"},
                "body": {
                    "patient_id": 1,
                    "message": "How are you feeling today?"
                }
            }
        }
    }

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    print(f"Starting Shifa AI Backend v2.0.0 on port {port}")
    uvicorn.run(app, host="0.0.0.0", port=port)
