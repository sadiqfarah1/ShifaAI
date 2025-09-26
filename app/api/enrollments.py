from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.models.enrollment import Enrollment
from app.models.patient import Patient
from app.schemas.enrollment import EnrollmentCreate, EnrollmentResponse
from app.api.auth import get_current_user
from app.models.user import User
from app.services.scheduler import SchedulerService
from datetime import datetime

router = APIRouter()

@router.post("/", response_model=EnrollmentResponse)
async def create_enrollment(
    enrollment_data: EnrollmentCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Create a new enrollment and schedule follow-up messages"""
    
    # Check if patient exists
    patient = db.query(Patient).filter(Patient.id == enrollment_data.patient_id).first()
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    
    # Create enrollment
    enrollment = Enrollment(
        patient_id=enrollment_data.patient_id,
        program=enrollment_data.program
    )
    
    db.add(enrollment)
    db.commit()
    db.refresh(enrollment)
    
    # Create follow-up schedule
    scheduler = SchedulerService()
    scheduler.create_follow_up_schedule(db, enrollment.id, patient.discharge_date)
    
    return enrollment
