from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, Enum
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.database import Base
import enum

class MessageDirection(str, enum.Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

class MessageLog(Base):
    __tablename__ = "message_logs"
    
    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey("patients.id"), nullable=False)
    direction = Column(Enum(MessageDirection), nullable=False)
    body_redacted = Column(Text, nullable=True)  # Redacted version for privacy
    raw_body_encrypted = Column(Text, nullable=True)  # Encrypted original
    provider = Column(String(50), default="twilio")
    external_id = Column(String(100), nullable=True)  # Twilio message SID
    received_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    patient = relationship("Patient", back_populates="message_logs")
    triage_results = relationship("TriageResult", back_populates="message")
    
    def __repr__(self):
        return f"<MessageLog(id={self.id}, direction={self.direction})>"
