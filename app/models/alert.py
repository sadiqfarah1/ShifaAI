from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Enum
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.database import Base
import enum

class AlertChannel(str, enum.Enum):
    SMS = "sms"
    EMAIL = "email"

class AlertStatus(str, enum.Enum):
    PENDING = "pending"
    SENT = "sent"
    RESOLVED = "resolved"
    FAILED = "failed"

class Alert(Base):
    __tablename__ = "alerts"
    
    id = Column(Integer, primary_key=True, index=True)
    triage_id = Column(Integer, ForeignKey("triage_results.id"), nullable=False)
    channel = Column(Enum(AlertChannel), nullable=False)
    target = Column(String(200), nullable=False)  # Phone or email
    status = Column(Enum(AlertStatus), default=AlertStatus.PENDING)
    sent_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    triage_result = relationship("TriageResult", back_populates="alerts")
    
    def __repr__(self):
        return f"<Alert(id={self.id}, status={self.status})>"
