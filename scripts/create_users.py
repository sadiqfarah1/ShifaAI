#!/usr/bin/env python3
"""Create users"""

import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from sqlalchemy.orm import Session
from app.db.database import SessionLocal
from app.models.user import User
from app.core.security import get_password_hash

def create_users():
    """Create users"""
    db = SessionLocal()
    try:
        # Create nurse user
        nurse = User(
            email="nurse@hospital.com",
            password_hash=get_password_hash("password123"),
            role="nurse"
        )
        db.add(nurse)
        
        # Create admin user
        admin = User(
            email="admin@hospital.com",
            password_hash=get_password_hash("admin123"),
            role="admin"
        )
        db.add(admin)
        
        db.commit()
        print("✅ Users created!")
        print("Nurse: nurse@hospital.com / password123")
        print("Admin: admin@hospital.com / admin123")
        
    finally:
        db.close()

if __name__ == "__main__":
    create_users()
