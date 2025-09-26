from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from app.models.message_log import MessageDirection
from app.models.triage_result import RiskLevel

class MessageLogResponse(BaseModel):
    id: int
    patient_id: int
    direction: MessageDirection
    body_redacted: Optional[str] = None
    provider: str
    external_id: Optional[str] = None
    received_at: datetime
    
    class Config:
        from_attributes = True

class TriageResultResponse(BaseModel):
    id: int
    message_id: int
    risk: RiskLevel
    reasons: List[str]
    action_hint: str
    model_name: str
    confidence: float
    created_at: datetime
    
    class Config:
        from_attributes = True
