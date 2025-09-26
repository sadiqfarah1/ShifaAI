from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.database import Base

class Enrollment(Base):
    __tablename__ = "enrollments"
    
    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey("patients.id"), nullable=False)
    program = Column(String(50), default="standard")
    started_at = Column(DateTime(timezone=True), server_default=func.now())
    ended_at = Column(DateTime(timezone=True), nullable=True)
    
    # Relationships
    patient = relationship("Patient", back_populates="enrollments")
    scheduled_messages = relationship("ScheduledMessage", back_populates="enrollment")
    
    def __repr__(self):
        return f"<Enrollment(id={self.id}, patient_id={self.patient_id})>"
