from sqlalchemy import Column, Integer, String, Text, Float, DateTime, ForeignKey, Enum
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.database import Base
import enum

class RiskLevel(str, enum.Enum):
    GREEN = "green"
    YELLOW = "yellow"
    RED = "red"

class TriageResult(Base):
    __tablename__ = "triage_results"
    
    id = Column(Integer, primary_key=True, index=True)
    message_id = Column(Integer, ForeignKey("message_logs.id"), nullable=False)
    risk = Column(Enum(RiskLevel), nullable=False)
    reasons_json = Column(Text, nullable=False)  # JSON array of reasons
    action_hint = Column(Text, nullable=False)
    model_name = Column(String(50), nullable=False)
    confidence = Column(Float, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    message = relationship("MessageLog", back_populates="triage_results")
    alerts = relationship("Alert", back_populates="triage_result")
    
    def __repr__(self):
        return f"<TriageResult(id={self.id}, risk={self.risk})>"
