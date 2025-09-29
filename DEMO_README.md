# Shifa AI Demo Backend

**Pre-HIPAA prototype with in-memory data (no PHI)**

## Quick Start

### 1. Run the Demo Backend

```bash
# Set environment variables
export PILOT_NO_PHI=true
export DEMO_ACCELERATE=true

# Run the demo backend
uvicorn demo_backend:app --reload --port 8000
```

### 2. Access the Demo

- **Web UI**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **Health Check**: http://localhost:8000/healthz

### 3. Run the Frontend (separate terminal)

```bash
cd frontend
npm run dev
```

Frontend will run on http://localhost:3000

## Demo Flow

1. **Open http://localhost:8000** - See the demo dashboard
2. **View Open Alerts** - Initially empty
3. **Simulate Patient Reply**:
   - Patient ID: `1`
   - Message: `I have swelling and shortness of breath`
   - Click "Send Reply"
4. **See the Alert** - A RED alert will be created
5. **Resolve the Alert** - Click "Resolve" button
6. **Check Logs** - Visit http://localhost:8000/debug/logs to see message history

## Key Features

✅ **No Database Required** - All data in-memory  
✅ **No PHI** - De-identified data only (`external_ref` instead of names)  
✅ **Auto Check-ins** - Scheduled messages sent automatically (8 seconds in demo mode)  
✅ **Rules Triage** - RED/YELLOW/GREEN based on keywords  
✅ **Alert System** - Nurse alerts for YELLOW/RED cases  
✅ **Simple UI** - HTML interface for testing  

## API Endpoints

### Health Check
```bash
curl http://localhost:8000/healthz
```

### Create Patient
```bash
curl -X POST "http://localhost:8000/api/patients?external_ref=pt_demo_002&cohort=chf"
```

### List Patients
```bash
curl http://localhost:8000/api/patients
```

### Create Enrollment
```bash
curl -X POST "http://localhost:8000/api/enrollments?patient_id=1&program=standard"
```

### List Alerts
```bash
curl http://localhost:8000/api/alerts
curl "http://localhost:8000/api/alerts?state=open"
```

### Simulate Inbound Message
```bash
curl -X POST http://localhost:8000/api/sim/inbound \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "patient_id=1&message=I have chest pain"
```

### Resolve Alert
```bash
curl -X POST "http://localhost:8000/api/alerts/resolve?alert_id=1"
```

### View Message Logs
```bash
curl http://localhost:8000/debug/logs
```

## Triage Rules

### RED (Critical)
- "chest pain"
- "shortness of breath" / "can't breathe"
- "severe"
- "bleeding"
- "emergency" / "911"

### YELLOW (Warning)
- "swelling"
- "dizzy"
- "fever"
- "nausea"
- "pain"
- "headache"
- "weight gain"
- "yes"
- "cough"
- "tired"
- "weak"

### GREEN (No Concerns)
- Everything else

## Environment Variables

- `PILOT_NO_PHI=true` - Reject/redact PHI (default: true)
- `DEMO_ACCELERATE=true` - Send scheduled messages in 8 seconds instead of 1 day (default: true)

## Compliance Notice

🛡️ **This demo is pre-HIPAA** and uses only de-identified or simulated data.  
**Do not enter real PHI.**

## Connect with Frontend

The demo backend is configured with CORS to accept requests from:
- http://localhost:3000 (local development)
- https://*.vercel.app (production deployment)

Your Next.js frontend can call these API endpoints directly.

## Troubleshooting

**Port 8000 already in use?**
```bash
lsof -ti:8000 | xargs kill -9
```

**Dependencies missing?**
```bash
pip install fastapi uvicorn python-multipart pydantic-settings
```

**Check if backend is running:**
```bash
curl http://localhost:8000/healthz
```

## Next Steps

To upgrade to full production backend:
1. Replace in-memory storage with PostgreSQL + SQLAlchemy
2. Add Redis for queue management
3. Integrate Twilio for real SMS
4. Add authentication and role-based access
5. Implement audit logging
6. Add LLM-based triage (Anthropic/OpenAI)
7. Complete HIPAA compliance requirements
