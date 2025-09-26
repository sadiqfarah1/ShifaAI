#!/usr/bin/env python3
"""Seed script for Care Transition Companion"""

import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from sqlalchemy.orm import Session
from app.db.database import SessionLocal, engine, Base
from app.models import *
from app.services.encryption import EncryptionService
from app.core.security import get_password_hash
from datetime import date, datetime, timedelta
import random

def create_tables():
    """Create all tables"""
    Base.metadata.create_all(bind=engine)

def seed_follow_up_templates():
    """Seed follow-up message templates"""
    db = SessionLocal()
    try:
        templates = [
            {
                "code": "D0",
                "offset_days": 0,
                "message_template": "Hi {first_name}, this is your care team checking in after your hospital visit. Reply HI to continue—reply STOP to opt out.",
                "active": True
            },
            {
                "code": "D1", 
                "offset_days": 1,
                "message_template": "How are you feeling today? Any shortness of breath, chest pain, dizziness, fever, or confusion? Reply in your words.",
                "active": True
            },
            {
                "code": "D3",
                "offset_days": 3,
                "message_template": "Hi {first_name}, checking in on your recovery. How are your symptoms? Any concerns?",
                "active": True
            },
            {
                "code": "D7",
                "offset_days": 7,
                "message_template": "Hi {first_name}, it's been a week since discharge. How are you feeling? Don't forget your follow-up appointment.",
                "active": True
            },
            {
                "code": "D14",
                "offset_days": 14,
                "message_template": "Hi {first_name}, two weeks post-discharge check-in. Any new symptoms or concerns?",
                "active": True
            },
            {
                "code": "D30",
                "offset_days": 30,
                "message_template": "Hi {first_name}, final check-in at 30 days. How has your recovery been?",
                "active": True
            }
        ]
        
        for template_data in templates:
            template = FollowUpTemplate(**template_data)
            db.add(template)
        
        db.commit()
        print("✓ Follow-up templates created")
        
    finally:
        db.close()

def seed_users():
    """Seed users"""
    db = SessionLocal()
    try:
        users = [
            {
                "email": "nurse@hospital.com",
                "password_hash": get_password_hash("password123"),
                "role": "nurse"
            },
            {
                "email": "admin@hospital.com", 
                "password_hash": get_password_hash("admin123"),
                "role": "admin"
            }
        ]
        
        for user_data in users:
            user = User(**user_data)
            db.add(user)
        
        db.commit()
        print("✓ Users created")
        
    finally:
        db.close()

def seed_patients():
    """Seed sample patients"""
    db = SessionLocal()
    encryption_service = EncryptionService()
    
    try:
        patients_data = [
            {
                "first_name": "John",
                "last_name": "Smith",
                "phone": "+15551234567",
                "condition": "Heart Failure",
                "language": "en",
                "discharge_date": date.today() - timedelta(days=2)
            },
            {
                "first_name": "Maria",
                "last_name": "Garcia", 
                "phone": "+15551234568",
                "condition": "COPD",
                "language": "es",
                "discharge_date": date.today() - timedelta(days=5)
            },
            {
                "first_name": "Robert",
                "last_name": "Johnson",
                "phone": "+15551234569", 
                "condition": "Diabetes",
                "language": "en",
                "discharge_date": date.today() - timedelta(days=10)
            },
            {
                "first_name": "Sarah",
                "last_name": "Williams",
                "phone": "+15551234570",
                "condition": "Heart Attack",
                "language": "en", 
                "discharge_date": date.today() - timedelta(days=15)
            },
            {
                "first_name": "Ahmed",
                "last_name": "Hassan",
                "phone": "+15551234571",
                "condition": "Pneumonia",
                "language": "en",
                "discharge_date": date.today() - timedelta(days=20)
            }
        ]
        
        for patient_data in patients_data:
            # Encrypt phone
            patient_data["phone_encrypted"] = encryption_service.encrypt_phone(patient_data["phone"])
            del patient_data["phone"]
            
            patient = Patient(**patient_data)
            db.add(patient)
        
        db.commit()
        print("✓ Patients created")
        
    finally:
        db.close()

def seed_enrollments():
    """Create enrollments for patients"""
    db = SessionLocal()
    try:
        patients = db.query(Patient).all()
        
        for patient in patients:
            enrollment = Enrollment(
                patient_id=patient.id,
                program="standard"
            )
            db.add(enrollment)
        
        db.commit()
        print("✓ Enrollments created")
        
    finally:
        db.close()

def seed_simulated_responses():
    """Create simulated patient responses"""
    db = SessionLocal()
    encryption_service = EncryptionService()
    
    try:
        patients = db.query(Patient).all()
        
        # Sample responses with different risk levels
        responses = [
            {"text": "Feeling great, no issues", "risk": "green"},
            {"text": "A little dizzy but otherwise ok", "risk": "yellow"},
            {"text": "Chest pain and shortness of breath", "risk": "red"},
            {"text": "Doing well, taking meds as prescribed", "risk": "green"},
            {"text": "Missed a few pills, feeling tired", "risk": "yellow"},
            {"text": "Can't breathe, need help", "risk": "red"},
            {"text": "Feeling much better today", "risk": "green"},
            {"text": "Swollen ankles, should I be worried?", "risk": "yellow"},
            {"text": "Severe chest pain, calling 911", "risk": "red"},
            {"text": "All good, thanks for checking", "risk": "green"}
        ]
        
        for patient in patients:
            # Create 2-3 responses per patient
            num_responses = random.randint(2, 3)
            for i in range(num_responses):
                response = random.choice(responses)
                
                message = MessageLog(
                    patient_id=patient.id,
                    direction="inbound",
                    body_redacted=encryption_service.redact_message_body(response["text"]),
                    raw_body_encrypted=encryption_service.encrypt_message_body(response["text"]),
                    provider="twilio",
                    external_id=f"sim_{patient.id}_{i}",
                    received_at=datetime.now() - timedelta(hours=random.randint(1, 48))
                )
                db.add(message)
                db.flush()  # Get the ID
                
                # Create triage result
                triage = TriageResult(
                    message_id=message.id,
                    risk=response["risk"],
                    reasons_json=f'["Simulated response: {response["risk"]}"]',
                    action_hint="Continue monitoring" if response["risk"] == "green" else "Follow up needed",
                    model_name="seed_data",
                    confidence=0.9
                )
                db.add(triage)
        
        db.commit()
        print("✓ Simulated responses created")
        
    finally:
        db.close()

def main():
    """Main seed function"""
    print("🌱 Seeding Care Transition Companion database...")
    
    create_tables()
    seed_follow_up_templates()
    seed_users()
    seed_patients()
    seed_enrollments()
    seed_simulated_responses()
    
    print("✅ Database seeded successfully!")
    print("\nLogin credentials:")
    print("Nurse: nurse@hospital.com / password123")
    print("Admin: admin@hospital.com / admin123")

if __name__ == "__main__":
    main()
