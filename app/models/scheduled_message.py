from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Enum
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.database import Base
import enum

class MessageStatus(str, enum.Enum):
    QUEUED = "queued"
    SENT = "sent"
    DELIVERED = "delivered"
    FAILED = "failed"

class ScheduledMessage(Base):
    __tablename__ = "scheduled_messages"
    
    id = Column(Integer, primary_key=True, index=True)
    enrollment_id = Column(Integer, ForeignKey("enrollments.id"), nullable=False)
    template_id = Column(Integer, ForeignKey("follow_up_templates.id"), nullable=False)
    send_at = Column(DateTime(timezone=True), nullable=False)
    status = Column(Enum(MessageStatus), default=MessageStatus.QUEUED)
    attempt_count = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    enrollment = relationship("Enrollment", back_populates="scheduled_messages")
    template = relationship("FollowUpTemplate")
    
    def __repr__(self):
        return f"<ScheduledMessage(id={self.id}, status={self.status})>"
