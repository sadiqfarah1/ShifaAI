from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.models.alert import Alert
from app.schemas.alert import AlertResponse
from app.api.auth import get_current_user
from app.models.user import User
from typing import List

router = APIRouter()

@router.get("/", response_model=List[AlertResponse])
async def list_alerts(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """List all alerts"""
    
    alerts = db.query(Alert).order_by(Alert.created_at.desc()).all()
    return alerts

@router.post("/test")
async def test_alert(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Send test alert"""
    
    # This would send a test SMS/email
    return {"message": "Test alert sent"}
