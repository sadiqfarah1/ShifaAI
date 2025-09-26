from sqlalchemy import Column, Integer, String, DateTime, Enum
from sqlalchemy.sql import func
from app.db.database import Base
import enum

class UserRole(str, enum.Enum):
    NURSE = "nurse"
    ADMIN = "admin"

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, nullable=False, index=True)
    password_hash = Column(String(255), nullable=True)  # For magic link, can be null
    role = Column(Enum(UserRole), default=UserRole.NURSE)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    def __repr__(self):
        return f"<User(id={self.id}, email={self.email})>"
