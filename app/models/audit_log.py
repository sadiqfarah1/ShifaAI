from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.database import Base

class AuditLog(Base):
    __tablename__ = "audit_logs"
    
    id = Column(Integer, primary_key=True, index=True)
    actor_user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    action = Column(String(100), nullable=False)
    entity = Column(String(50), nullable=False)  # e.g., "patient", "triage"
    entity_id = Column(Integer, nullable=False)
    meta_json = Column(Text, nullable=True)  # Additional metadata
    ts = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    actor = relationship("User")
    
    def __repr__(self):
        return f"<AuditLog(id={self.id}, action={self.action})>"
