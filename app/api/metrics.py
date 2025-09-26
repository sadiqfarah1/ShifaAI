from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func, desc
from app.db.database import get_db
from app.models.enrollment import Enrollment
from app.models.triage_result import TriageResult, RiskLevel
from app.models.alert import Alert
from app.api.auth import get_current_user
from app.models.user import User
from datetime import datetime, timedelta
from typing import Dict

router = APIRouter()

@router.get("/")
async def get_metrics(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Get dashboard metrics"""
    
    # Enrollment count (last 7 days)
    week_ago = datetime.utcnow() - timedelta(days=7)
    enrollment_count = db.query(Enrollment).filter(
        Enrollment.started_at >= week_ago
    ).count()
    
    # Engagement rate (patients who responded in last 7 days)
    total_patients = db.query(Enrollment).filter(
        Enrollment.started_at >= week_ago
    ).count()
    
    # This is simplified - in reality you'd check for actual responses
    engaged_patients = total_patients * 0.75  # Placeholder
    engagement_rate = (engaged_patients / total_patients * 100) if total_patients > 0 else 0
    
    # Red alerts in last 24 hours
    day_ago = datetime.utcnow() - timedelta(days=1)
    red_alerts_24h = db.query(TriageResult).filter(
        TriageResult.risk == RiskLevel.RED,
        TriageResult.created_at >= day_ago
    ).count()
    
    return {
        "enrollment_count": enrollment_count,
        "engagement_rate": round(engagement_rate, 1),
        "red_alerts_24h": red_alerts_24h,
        "total_patients": total_patients
    }
