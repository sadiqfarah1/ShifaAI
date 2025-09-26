import streamlit as st
import requests
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime, timedelta
import time
import json

# Configuration
API_BASE_URL = "http://api:8000"  # Will be overridden by env var
if "API_BASE_URL" in st.secrets:
    API_BASE_URL = st.secrets["API_BASE_URL"]

# Session state
if "authenticated" not in st.session_state:
    st.session_state.authenticated = False
if "access_token" not in st.session_state:
    st.session_state.access_token = None
if "user_info" not in st.session_state:
    st.session_state.user_info = None

def login():
    """Login page"""
    st.title("Care Transition Companion")
    st.subheader("Nurse Dashboard Login")
    
    with st.form("login_form"):
        email = st.text_input("Email")
        password = st.text_input("Password", type="password")
        submit = st.form_submit_button("Login")
        
        if submit:
            try:
                response = requests.post(
                    f"{API_BASE_URL}/api/auth/login",
                    json={"email": email, "password": password}
                )
                
                if response.status_code == 200:
                    data = response.json()
                    st.session_state.authenticated = True
                    st.session_state.access_token = data["access_token"]
                    st.session_state.user_info = {
                        "user_id": data["user_id"],
                        "email": data["user_email"],
                        "role": data["user_role"]
                    }
                    st.success("Login successful!")
                    st.rerun()
                else:
                    st.error("Invalid credentials")
            except Exception as e:
                st.error(f"Login failed: {e}")

def get_headers():
    """Get authorization headers"""
    if st.session_state.access_token:
        return {"Authorization": f"Bearer {st.session_state.access_token}"}
    return {}

def dashboard():
    """Main dashboard"""
    st.title("Care Transition Companion")
    st.subheader("Nurse Dashboard")
    
    # Sidebar
    with st.sidebar:
        st.write(f"Welcome, {st.session_state.user_info['email']}")
        if st.button("Logout"):
            st.session_state.authenticated = False
            st.session_state.access_token = None
            st.session_state.user_info = None
            st.rerun()
    
    # Tabs
    tab1, tab2, tab3 = st.tabs(["Patients", "Alerts", "Metrics"])
    
    with tab1:
        patients_tab()
    
    with tab2:
        alerts_tab()
    
    with tab3:
        metrics_tab()

def patients_tab():
    """Patients management tab"""
    st.header("Patient Management")
    
    # Filters
    col1, col2, col3 = st.columns(3)
    
    with col1:
        risk_filter = st.selectbox("Risk Level", ["All", "Green", "Yellow", "Red"])
    
    with col2:
        search_query = st.text_input("Search patients")
    
    with col3:
        if st.button("Refresh"):
            st.rerun()
    
    # Get patients
    try:
        params = {}
        if risk_filter != "All":
            params["risk"] = risk_filter.lower()
        if search_query:
            params["q"] = search_query
        
        response = requests.get(
            f"{API_BASE_URL}/api/patients",
            headers=get_headers(),
            params=params
        )
        
        if response.status_code == 200:
            patients = response.json()
            
            if patients:
                # Create DataFrame
                df = pd.DataFrame(patients)
                
                # Format columns
                df["days_since_discharge"] = df["days_since_discharge"].astype(str) + " days"
                df["last_response_at"] = pd.to_datetime(df["last_response_at"]).dt.strftime("%Y-%m-%d %H:%M")
                
                # Display table
                st.dataframe(
                    df,
                    use_container_width=True,
                    column_config={
                        "id": "ID",
                        "first_name": "First Name",
                        "last_name": "Last Name",
                        "condition": "Condition",
                        "current_risk": "Risk",
                        "last_response_at": "Last Response",
                        "days_since_discharge": "Days Since Discharge"
                    }
                )
                
                # Patient details
                st.subheader("Patient Details")
                selected_id = st.selectbox("Select Patient", df["id"].tolist())
                
                if selected_id:
                    patient_detail(selected_id)
            else:
                st.info("No patients found")
        else:
            st.error("Failed to load patients")
    
    except Exception as e:
        st.error(f"Error loading patients: {e}")

def patient_detail(patient_id):
    """Show patient detail view"""
    try:
        # Get patient details
        response = requests.get(
            f"{API_BASE_URL}/api/patients/{patient_id}",
            headers=get_headers()
        )
        
        if response.status_code == 200:
            patient = response.json()
            
            col1, col2 = st.columns(2)
            
            with col1:
                st.write(f"**Name:** {patient['first_name']} {patient['last_name']}")
                st.write(f"**Phone:** {patient['phone']}")
                st.write(f"**Condition:** {patient['condition']}")
                st.write(f"**Language:** {patient['language']}")
                st.write(f"**Discharge Date:** {patient['discharge_date']}")
            
            with col2:
                # Action buttons
                if st.button("Call Patient", key=f"call_{patient_id}"):
                    st.info("Calling patient...")
                
                if st.button("Mark Resolved", key=f"resolve_{patient_id}"):
                    resolve_response = requests.post(
                        f"{API_BASE_URL}/api/patients/{patient_id}/resolve",
                        headers=get_headers(),
                        json={"note": "Resolved via dashboard"}
                    )
                    if resolve_response.status_code == 200:
                        st.success("Alert resolved")
                    else:
                        st.error("Failed to resolve alert")
                
                if st.button("Re-schedule Check", key=f"reschedule_{patient_id}"):
                    st.info("Re-scheduling...")
        else:
            st.error("Failed to load patient details")
    
    except Exception as e:
        st.error(f"Error loading patient details: {e}")

def alerts_tab():
    """Alerts management tab"""
    st.header("Alerts")
    
    try:
        response = requests.get(
            f"{API_BASE_URL}/api/alerts",
            headers=get_headers()
        )
        
        if response.status_code == 200:
            alerts = response.json()
            
            if alerts:
                df = pd.DataFrame(alerts)
                st.dataframe(df, use_container_width=True)
            else:
                st.info("No alerts found")
        else:
            st.error("Failed to load alerts")
    
    except Exception as e:
        st.error(f"Error loading alerts: {e}")

def metrics_tab():
    """Metrics dashboard tab"""
    st.header("Metrics Dashboard")
    
    try:
        response = requests.get(
            f"{API_BASE_URL}/api/metrics",
            headers=get_headers()
        )
        
        if response.status_code == 200:
            metrics = response.json()
            
            # Key metrics
            col1, col2, col3, col4 = st.columns(4)
            
            with col1:
                st.metric("Enrollments (7d)", metrics["enrollment_count"])
            
            with col2:
                st.metric("Engagement Rate", f"{metrics['engagement_rate']}%")
            
            with col3:
                st.metric("Red Alerts (24h)", metrics["red_alerts_24h"])
            
            with col4:
                st.metric("Total Patients", metrics["total_patients"])
            
            # Charts
            st.subheader("Engagement Trends")
            
            # Mock data for charts
            dates = pd.date_range(start=datetime.now() - timedelta(days=7), end=datetime.now(), freq='D')
            engagement_data = pd.DataFrame({
                'date': dates,
                'engagement_rate': [65, 70, 68, 72, 75, 78, 80]
            })
            
            fig = px.line(engagement_data, x='date', y='engagement_rate', title='Engagement Rate Over Time')
            st.plotly_chart(fig, use_container_width=True)
            
            # Risk distribution
            st.subheader("Risk Distribution")
            risk_data = pd.DataFrame({
                'risk': ['Green', 'Yellow', 'Red'],
                'count': [45, 12, 3]
            })
            
            fig = px.pie(risk_data, values='count', names='risk', title='Current Risk Distribution')
            st.plotly_chart(fig, use_container_width=True)
            
        else:
            st.error("Failed to load metrics")
    
    except Exception as e:
        st.error(f"Error loading metrics: {e}")

def main():
    """Main app"""
    if not st.session_state.authenticated:
        login()
    else:
        dashboard()

if __name__ == "__main__":
    main()
