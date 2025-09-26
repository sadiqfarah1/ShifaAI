#!/usr/bin/env python3
"""Update user passwords"""

import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from sqlalchemy.orm import Session
from app.db.database import SessionLocal
from app.models.user import User
from app.core.security import get_password_hash

def update_users():
    """Update user passwords"""
    db = SessionLocal()
    try:
        # Update nurse password
        nurse = db.query(User).filter(User.email == "nurse@hospital.com").first()
        if nurse:
            nurse.password_hash = get_password_hash("password123")
            print("✓ Updated nurse password")
        
        # Update admin password
        admin = db.query(User).filter(User.email == "admin@hospital.com").first()
        if admin:
            admin.password_hash = get_password_hash("admin123")
            print("✓ Updated admin password")
        
        db.commit()
        print("✅ User passwords updated!")
        
    finally:
        db.close()

if __name__ == "__main__":
    update_users()
