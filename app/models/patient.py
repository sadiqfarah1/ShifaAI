from sqlalchemy import Column, Integer, String, Date, DateTime, Text
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.database import Base

class Patient(Base):
    __tablename__ = "patients"
    
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    phone_encrypted = Column(Text, nullable=False)  # Encrypted phone number
    condition = Column(String(200), nullable=False)
    language = Column(String(10), default="en")
    discharge_date = Column(Date, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    enrollments = relationship("Enrollment", back_populates="patient")
    message_logs = relationship("MessageLog", back_populates="patient")
    
    def __repr__(self):
        return f"<Patient(id={self.id}, name='{self.first_name} {self.last_name}')>"
