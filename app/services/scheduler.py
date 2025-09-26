from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.interval import IntervalTrigger
from sqlalchemy.orm import Session
from app.db.database import SessionLocal
from app.models.scheduled_message import ScheduledMessage, MessageStatus
from app.services.twilio_service import TwilioService
from app.services.encryption import EncryptionService
from app.core.config import settings
import logging
from datetime import datetime, timedelta
import asyncio

logger = logging.getLogger(__name__)

class SchedulerService:
    def __init__(self):
        self.scheduler = AsyncIOScheduler()
        self.twilio_service = TwilioService()
        self.encryption_service = EncryptionService()
    
    def start(self):
        """Start the scheduler"""
        # Run every minute to check for due messages
        self.scheduler.add_job(
            self.process_due_messages,
            trigger=IntervalTrigger(minutes=1),
            id='process_due_messages',
            replace_existing=True
        )
        
        self.scheduler.start()
        logger.info("Scheduler started")
    
    def stop(self):
        """Stop the scheduler"""
        self.scheduler.shutdown()
        logger.info("Scheduler stopped")
    
    async def process_due_messages(self):
        """Process messages that are due to be sent"""
        db = SessionLocal()
        try:
            # Get all queued messages that are due
            due_messages = db.query(ScheduledMessage).filter(
                ScheduledMessage.status == MessageStatus.QUEUED,
                ScheduledMessage.send_at <= datetime.utcnow()
            ).all()
            
            logger.info(f"Processing {len(due_messages)} due messages")
            
            for message in due_messages:
                await self._send_scheduled_message(db, message)
                
        except Exception as e:
            logger.error(f"Error processing due messages: {e}")
        finally:
            db.close()
    
    async def _send_scheduled_message(self, db: Session, scheduled_message: ScheduledMessage):
        """Send a scheduled message"""
        try:
            # Get patient phone number
            patient = scheduled_message.enrollment.patient
            phone = self.encryption_service.decrypt_phone(patient.phone_encrypted)
            
            # Format message with patient name
            message_text = scheduled_message.template.message_template.format(
                first_name=patient.first_name
            )
            
            # Send via Twilio
            twilio_sid = self.twilio_service.send_sms(phone, message_text)
            
            # Update message status
            scheduled_message.status = MessageStatus.SENT
            scheduled_message.attempt_count += 1
            db.commit()
            
            logger.info(f"Message {scheduled_message.id} sent successfully")
            
        except Exception as e:
            logger.error(f"Failed to send message {scheduled_message.id}: {e}")
            
            # Update attempt count and potentially mark as failed
            scheduled_message.attempt_count += 1
            if scheduled_message.attempt_count >= 3:  # Max 3 attempts
                scheduled_message.status = MessageStatus.FAILED
            db.commit()
    
    def create_follow_up_schedule(self, db: Session, enrollment_id: int, discharge_date: datetime):
        """Create scheduled messages for a new enrollment"""
        from app.models.follow_up_template import FollowUpTemplate
        
        # Get all active templates
        templates = db.query(FollowUpTemplate).filter(FollowUpTemplate.active == True).all()
        
        for template in templates:
            # Calculate send time
            send_at = discharge_date + timedelta(days=template.offset_days)
            
            # Create scheduled message
            scheduled_message = ScheduledMessage(
                enrollment_id=enrollment_id,
                template_id=template.id,
                send_at=send_at,
                status=MessageStatus.QUEUED
            )
            
            db.add(scheduled_message)
        
        db.commit()
        logger.info(f"Created follow-up schedule for enrollment {enrollment_id}")
