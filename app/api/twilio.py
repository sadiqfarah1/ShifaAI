from fastapi import APIRouter, Depends, Request, HTTPException, Form
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.models.patient import Patient
from app.models.message_log import MessageLog, MessageDirection
from app.models.triage_result import TriageResult
from app.models.alert import Alert, AlertChannel, AlertStatus
from app.services.twilio_service import TwilioService
from app.services.triage import TriageService
from app.services.encryption import EncryptionService
from app.core.config import settings
import logging
from datetime import datetime

router = APIRouter()
twilio_service = TwilioService()
triage_service = TriageService()
encryption_service = EncryptionService()

logger = logging.getLogger(__name__)

@router.post("/inbound")
async def handle_inbound_sms(
    request: Request,
    From: str = Form(...),
    Body: str = Form(...),
    MessageSid: str = Form(...),
    db: Session = Depends(get_db)
):
    """Handle inbound SMS from Twilio"""
    
    try:
        # Verify webhook signature
        form_data = await request.form()
        signature = request.headers.get("X-Twilio-Signature", "")
        
        if not twilio_service.verify_webhook(str(request.url), dict(form_data), signature):
            raise HTTPException(status_code=403, detail="Invalid signature")
        
        # Format phone number
        from_phone = twilio_service.format_phone_number(From)
        
        # Find patient by phone
        patients = db.query(Patient).all()
        patient = None
        for p in patients:
            try:
                decrypted_phone = encryption_service.decrypt_phone(p.phone_encrypted)
                if decrypted_phone == from_phone:
                    patient = p
                    break
            except:
                continue
        
        if not patient:
            logger.warning(f"No patient found for phone: {from_phone}")
            return {"message": "Patient not found"}
        
        # Store message
        message_log = MessageLog(
            patient_id=patient.id,
            direction=MessageDirection.INBOUND,
            body_redacted=encryption_service.redact_message_body(Body),
            raw_body_encrypted=encryption_service.encrypt_message_body(Body),
            provider="twilio",
            external_id=MessageSid
        )
        
        db.add(message_log)
        db.commit()
        db.refresh(message_log)
        
        # Run triage
        days_since_discharge = (datetime.now().date() - patient.discharge_date).days
        triage_result = triage_service.triage_message(Body, patient.condition, days_since_discharge)
        
        # Store triage result
        triage = TriageResult(
            message_id=message_log.id,
            risk=triage_result["risk"],
            reasons_json=str(triage_result["reasons"]),
            action_hint=triage_result["action_hint"],
            model_name=triage_result["model_name"],
            confidence=triage_result["confidence"]
        )
        
        db.add(triage)
        db.commit()
        db.refresh(triage)
        
        # Create alerts if needed
        if triage_result["risk"] in ["red", "yellow"]:
            await create_alert(db, triage, patient)
        
        # Clean up raw message if in local mode
        if settings.local_mode:
            message_log.raw_body_encrypted = None
            db.commit()
        
        logger.info(f"Processed inbound message from {patient.first_name} {patient.last_name}")
        
        return {"message": "Message processed"}
        
    except Exception as e:
        logger.error(f"Error processing inbound SMS: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

async def create_alert(db: Session, triage: TriageResult, patient: Patient):
    """Create alert for triage result"""
    
    # Create SMS alert for red risk
    if triage.risk == "red":
        sms_alert = Alert(
            triage_id=triage.id,
            channel=AlertChannel.SMS,
            target=settings.nurse_phone,
            status=AlertStatus.PENDING
        )
        db.add(sms_alert)
        
        # Send immediate SMS
        try:
            message = f"URGENT: {patient.first_name} {patient.last_name} ({patient.condition}) - {triage.action_hint}"
            twilio_service.send_sms(settings.nurse_phone, message)
            sms_alert.status = AlertStatus.SENT
            sms_alert.sent_at = datetime.utcnow()
        except Exception as e:
            logger.error(f"Failed to send SMS alert: {e}")
            sms_alert.status = AlertStatus.FAILED
    
    # Create email alert for yellow/red risk
    email_alert = Alert(
        triage_id=triage.id,
        channel=AlertChannel.EMAIL,
        target=settings.nurse_email,
        status=AlertStatus.PENDING
    )
    db.add(email_alert)
    
    # TODO: Send email via SMTP
    email_alert.status = AlertStatus.SENT
    email_alert.sent_at = datetime.utcnow()
    
    db.commit()
