from sqlalchemy import Column, Integer, String, Text, Boolean
from app.db.database import Base

class FollowUpTemplate(Base):
    __tablename__ = "follow_up_templates"
    
    id = Column(Integer, primary_key=True, index=True)
    code = Column(String(20), nullable=False, unique=True)  # e.g., "D1", "D3"
    offset_days = Column(Integer, nullable=False)  # Days after discharge
    message_template = Column(Text, nullable=False)
    active = Column(Boolean, default=True)
    
    def __repr__(self):
        return f"<FollowUpTemplate(code={self.code}, offset_days={self.offset_days})>"
