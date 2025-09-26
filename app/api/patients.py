from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from sqlalchemy import func, desc
from typing import Optional, List
from datetime import date, datetime, timedelta
from app.db.database import get_db
from app.models.patient import Patient
from app.models.triage_result import TriageResult, RiskLevel
from app.models.message_log import MessageLog
from app.schemas.patient import PatientCreate, PatientResponse, PatientList
from app.services.encryption import EncryptionService
from app.api.auth import get_current_user
from app.models.user import User

router = APIRouter()
encryption_service = EncryptionService()

@router.post("/", response_model=PatientResponse)
async def create_patient(
    patient_data: PatientCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Create a new patient"""
    
    # Encrypt phone number
    encrypted_phone = encryption_service.encrypt_phone(patient_data.phone)
    
    # Create patient
    patient = Patient(
        first_name=patient_data.first_name,
        last_name=patient_data.last_name,
        phone_encrypted=encrypted_phone,
        condition=patient_data.condition,
        language=patient_data.language,
        discharge_date=patient_data.discharge_date
    )
    
    db.add(patient)
    db.commit()
    db.refresh(patient)
    
    # Decrypt phone for response
    patient.phone = encryption_service.decrypt_phone(patient.phone_encrypted)
    
    return patient

@router.get("/", response_model=List[PatientList])
async def list_patients(
    risk: Optional[RiskLevel] = Query(None),
    q: Optional[str] = Query(None),
    page: int = Query(1, ge=1),
    page_size: int = Query(50, ge=1, le=100),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """List patients with filters"""
    
    query = db.query(Patient)
    
    # Search filter
    if q:
        query = query.filter(
            (Patient.first_name.ilike(f"%{q}%")) |
            (Patient.last_name.ilike(f"%{q}%")) |
            (Patient.condition.ilike(f"%{q}%"))
        )
    
    # Risk filter - join with latest triage result
    if risk:
        subquery = db.query(
            TriageResult.patient_id,
            func.max(TriageResult.created_at).label('latest_triage')
        ).group_by(TriageResult.patient_id).subquery()
        
        query = query.join(
            subquery, Patient.id == subquery.c.patient_id
        ).join(
            TriageResult, 
            (TriageResult.patient_id == subquery.c.patient_id) &
            (TriageResult.created_at == subquery.c.latest_triage) &
            (TriageResult.risk == risk)
        )
    
    # Pagination
    offset = (page - 1) * page_size
    patients = query.offset(offset).limit(page_size).all()
    
    # Build response with additional data
    result = []
    for patient in patients:
        # Get latest triage result
        latest_triage = db.query(TriageResult).filter(
            TriageResult.message_id.in_(
                db.query(MessageLog.id).filter(MessageLog.patient_id == patient.id)
            )
        ).order_by(desc(TriageResult.created_at)).first()
        
        # Get last response time
        last_message = db.query(MessageLog).filter(
            MessageLog.patient_id == patient.id,
            MessageLog.direction == "inbound"
        ).order_by(desc(MessageLog.received_at)).first()
        
        # Calculate days since discharge
        days_since_discharge = (date.today() - patient.discharge_date).days
        
        result.append(PatientList(
            id=patient.id,
            first_name=patient.first_name,
            last_name=patient.last_name,
            condition=patient.condition,
            language=patient.language,
            discharge_date=patient.discharge_date,
            current_risk=latest_triage.risk if latest_triage else None,
            last_response_at=last_message.received_at if last_message else None,
            days_since_discharge=days_since_discharge
        ))
    
    return result

@router.get("/{patient_id}", response_model=PatientResponse)
async def get_patient(
    patient_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Get patient details"""
    
    patient = db.query(Patient).filter(Patient.id == patient_id).first()
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    
    # Decrypt phone for response
    patient.phone = encryption_service.decrypt_phone(patient.phone_encrypted)
    
    return patient

@router.post("/{patient_id}/resolve")
async def resolve_patient_alert(
    patient_id: int,
    note: str = "",
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Mark latest alert as resolved for patient"""
    
    # Get latest alert for patient
    latest_alert = db.query(TriageResult).filter(
        TriageResult.message_id.in_(
            db.query(MessageLog.id).filter(MessageLog.patient_id == patient_id)
        )
    ).order_by(desc(TriageResult.created_at)).first()
    
    if not latest_alert:
        raise HTTPException(status_code=404, detail="No alerts found for patient")
    
    # Update alert status
    for alert in latest_alert.alerts:
        alert.status = "resolved"
    
    db.commit()
    
    return {"message": "Alert resolved", "note": note}
