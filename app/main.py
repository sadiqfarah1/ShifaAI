from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.core.config import settings
from app.api import auth, patients, enrollments, twilio, alerts, metrics
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Care Transition Companion API",
    description="MVP for reducing 30-day readmissions",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure properly for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Security
security = HTTPBearer()

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(patients.router, prefix="/api/patients", tags=["patients"])
app.include_router(enrollments.router, prefix="/api/enrollments", tags=["enrollments"])
app.include_router(twilio.router, prefix="/api/twilio", tags=["twilio"])
app.include_router(alerts.router, prefix="/api/alerts", tags=["alerts"])
app.include_router(metrics.router, prefix="/api/metrics", tags=["metrics"])

@app.get("/")
async def root():
    return {"message": "Care Transition Companion API", "version": "1.0.0"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
