from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from app.models.user import UserRole

class UserCreate(BaseModel):
    email: str
    password: Optional[str] = None
    role: UserRole = UserRole.NURSE

class UserResponse(BaseModel):
    id: int
    email: str
    role: UserRole
    created_at: datetime
    
    class Config:
        from_attributes = True

class LoginRequest(BaseModel):
    email: str
    password: str
