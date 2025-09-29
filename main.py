from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional, Dict, Any
import os
from datetime import datetime
import json

# Initialize FastAPI app
app = FastAPI(
    title="Shifa AI - Care Transition Companion",
    description="AI-powered post-discharge follow-up system",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage for demo (replace with database later)
patients_db = []
patient_id_counter = 1

@app.get("/")
async def root():
    return {
        "message": "Shifa AI - Care Transition Companion API",
        "status": "running",
        "version": "1.0.0",
        "timestamp": datetime.now().isoformat()
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

@app.post("/api/patients")
async def create_patient(patient_data: Dict[str, Any]):
    """Create a new patient"""
    global patient_id_counter
    
    # Validate required fields
    if not patient_data.get("name") or not patient_data.get("phone"):
        raise HTTPException(status_code=400, detail="Name and phone are required")
    
    new_patient = {
        "id": patient_id_counter,
        "name": patient_data["name"],
        "phone": patient_data["phone"],
        "email": patient_data.get("email"),
        "discharge_date": patient_data.get("discharge_date", ""),
        "created_at": datetime.now().isoformat()
    }
    
    patients_db.append(new_patient)
    patient_id_counter += 1
    
    return new_patient

@app.get("/api/patients")
async def get_patients():
    """Get all patients"""
    return patients_db

@app.get("/api/patients/{patient_id}")
async def get_patient(patient_id: int):
    """Get a specific patient"""
    for patient in patients_db:
        if patient["id"] == patient_id:
            return patient
    
    raise HTTPException(status_code=404, detail="Patient not found")

@app.post("/api/messages/send")
async def send_message(message_data: Dict[str, Any]):
    """Send a message to a patient (placeholder for Twilio integration)"""
    patient_id = message_data.get("patient_id")
    message = message_data.get("message")
    
    if not patient_id or not message:
        raise HTTPException(status_code=400, detail="patient_id and message are required")
    
    # Find patient
    patient = None
    for p in patients_db:
        if p["id"] == patient_id:
            patient = p
            break
    
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    
    # TODO: Integrate with Twilio here
    return {
        "message": f"Message sent to {patient['name']} at {patient['phone']}: {message}",
        "status": "sent",
        "timestamp": datetime.now().isoformat()
    }

@app.get("/api/stats")
async def get_stats():
    """Get basic statistics"""
    return {
        "total_patients": len(patients_db),
        "active_patients": len(patients_db),  # All patients are active for now
        "messages_sent": 0,  # Placeholder
        "timestamp": datetime.now().isoformat()
    }

@app.get("/api/docs")
async def get_docs():
    """Simple API documentation"""
    return {
        "endpoints": {
            "GET /": "API info",
            "GET /health": "Health check",
            "POST /api/patients": "Create patient (requires: name, phone)",
            "GET /api/patients": "List all patients",
            "GET /api/patients/{id}": "Get specific patient",
            "POST /api/messages/send": "Send message (requires: patient_id, message)",
            "GET /api/stats": "Get statistics",
            "GET /api/docs": "This documentation"
        },
        "example_patient": {
            "name": "John Doe",
            "phone": "+1234567890",
            "email": "john@example.com",
            "discharge_date": "2025-09-28"
        },
        "example_message": {
            "patient_id": 1,
            "message": "How are you feeling today?"
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
