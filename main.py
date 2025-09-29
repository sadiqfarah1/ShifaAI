from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import os
from datetime import datetime

# Simple models
class PatientCreate(BaseModel):
    name: str
    phone: str
    email: Optional[str] = None
    discharge_date: str

class PatientResponse(BaseModel):
    id: int
    name: str
    phone: str
    email: Optional[str] = None
    discharge_date: str
    created_at: datetime

class MessageResponse(BaseModel):
    message: str
    status: str

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

@app.post("/api/patients", response_model=PatientResponse)
async def create_patient(patient: PatientCreate):
    """Create a new patient"""
    global patient_id_counter
    
    new_patient = {
        "id": patient_id_counter,
        "name": patient.name,
        "phone": patient.phone,
        "email": patient.email,
        "discharge_date": patient.discharge_date,
        "created_at": datetime.now()
    }
    
    patients_db.append(new_patient)
    patient_id_counter += 1
    
    return PatientResponse(**new_patient)

@app.get("/api/patients", response_model=List[PatientResponse])
async def get_patients():
    """Get all patients"""
    return [PatientResponse(**patient) for patient in patients_db]

@app.get("/api/patients/{patient_id}", response_model=PatientResponse)
async def get_patient(patient_id: int):
    """Get a specific patient"""
    for patient in patients_db:
        if patient["id"] == patient_id:
            return PatientResponse(**patient)
    
    raise HTTPException(status_code=404, detail="Patient not found")

@app.post("/api/messages/send", response_model=MessageResponse)
async def send_message(patient_id: int, message: str):
    """Send a message to a patient (placeholder for Twilio integration)"""
    # Find patient
    patient = None
    for p in patients_db:
        if p["id"] == patient_id:
            patient = p
            break
    
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    
    # TODO: Integrate with Twilio here
    return MessageResponse(
        message=f"Message sent to {patient['name']} at {patient['phone']}: {message}",
        status="sent"
    )

@app.get("/api/stats")
async def get_stats():
    """Get basic statistics"""
    return {
        "total_patients": len(patients_db),
        "active_patients": len(patients_db),  # All patients are active for now
        "messages_sent": 0,  # Placeholder
        "timestamp": datetime.now().isoformat()
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
