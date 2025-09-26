from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from app.models.alert import AlertChannel, AlertStatus

class AlertResponse(BaseModel):
    id: int
    triage_id: int
    channel: AlertChannel
    target: str
    status: AlertStatus
    sent_at: Optional[datetime] = None
    created_at: datetime
    
    class Config:
        from_attributes = True
