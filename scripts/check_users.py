#!/usr/bin/env python3
"""Check users in database"""

import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from sqlalchemy.orm import Session
from app.db.database import SessionLocal
from app.models.user import User

def check_users():
    """Check users in database"""
    db = SessionLocal()
    try:
        users = db.query(User).all()
        print(f"Found {len(users)} users:")
        for user in users:
            print(f"  - {user.email} ({user.role}) - hash: {user.password_hash[:20]}...")
        
    finally:
        db.close()

if __name__ == "__main__":
    check_users()
