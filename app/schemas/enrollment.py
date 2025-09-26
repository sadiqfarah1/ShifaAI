from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class EnrollmentCreate(BaseModel):
    patient_id: int
    program: str = "standard"

class EnrollmentResponse(BaseModel):
    id: int
    patient_id: int
    program: str
    started_at: datetime
    ended_at: Optional[datetime] = None
    
    class Config:
        from_attributes = True
