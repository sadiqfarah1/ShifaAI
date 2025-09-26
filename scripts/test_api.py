#!/usr/bin/env python3
"""Test script for Care Transition Companion API"""

import requests
import json

API_BASE_URL = "http://localhost:8000"

def test_health():
    """Test health endpoint"""
    try:
        response = requests.get(f"{API_BASE_URL}/health")
        print(f"Health check: {response.status_code} - {response.json()}")
        return response.status_code == 200
    except Exception as e:
        print(f"Health check failed: {e}")
        return False

def test_login():
    """Test login endpoint"""
    try:
        response = requests.post(
            f"{API_BASE_URL}/api/auth/login",
            json={"email": "nurse@hospital.com", "password": "password123"}
        )
        print(f"Login: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"Token: {data['access_token'][:20]}...")
            return data['access_token']
        return None
    except Exception as e:
        print(f"Login failed: {e}")
        return None

def test_patients(token):
    """Test patients endpoint"""
    headers = {"Authorization": f"Bearer {token}"}
    try:
        response = requests.get(f"{API_BASE_URL}/api/patients", headers=headers)
        print(f"Patients: {response.status_code}")
        if response.status_code == 200:
            patients = response.json()
            print(f"Found {len(patients)} patients")
            return True
        return False
    except Exception as e:
        print(f"Patients test failed: {e}")
        return False

def test_metrics(token):
    """Test metrics endpoint"""
    headers = {"Authorization": f"Bearer {token}"}
    try:
        response = requests.get(f"{API_BASE_URL}/api/metrics", headers=headers)
        print(f"Metrics: {response.status_code}")
        if response.status_code == 200:
            metrics = response.json()
            print(f"Metrics: {json.dumps(metrics, indent=2)}")
            return True
        return False
    except Exception as e:
        print(f"Metrics test failed: {e}")
        return False

def main():
    """Run all tests"""
    print("🧪 Testing Care Transition Companion API...")
    
    # Test health
    if not test_health():
        print("❌ Health check failed")
        return
    
    # Test login
    token = test_login()
    if not token:
        print("❌ Login failed")
        return
    
    # Test protected endpoints
    test_patients(token)
    test_metrics(token)
    
    print("✅ API tests completed")

if __name__ == "__main__":
    main()
