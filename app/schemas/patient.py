from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import date, datetime
from app.models.triage_result import RiskLevel

class PatientCreate(BaseModel):
    first_name: str = Field(..., min_length=1, max_length=100)
    last_name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., pattern=r'^\+?[1-9]\d{1,14}$')
    condition: str = Field(..., min_length=1, max_length=200)
    language: str = Field(default="en", max_length=10)
    discharge_date: date

class PatientResponse(BaseModel):
    id: int
    first_name: str
    last_name: str
    phone: str  # Will be decrypted
    condition: str
    language: str
    discharge_date: date
    created_at: datetime
    
    class Config:
        from_attributes = True

class PatientList(BaseModel):
    id: int
    first_name: str
    last_name: str
    condition: str
    language: str
    discharge_date: date
    current_risk: Optional[RiskLevel] = None
    last_response_at: Optional[datetime] = None
    days_since_discharge: int
    
    class Config:
        from_attributes = True
