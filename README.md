# Shifa AI - Care Transition Companion (CTC)

A YC-ready MVP for reducing 30-day readmissions by automating post-discharge follow-ups via SMS/voice, triaging risk from patient replies, and alerting the care team.

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Twilio account (for SMS)
- OpenAI or Anthropic API key (for AI triage)

### 1. Setup Environment

```bash
# Copy environment template
cp .env.sample .env

# Edit .env with your credentials
# Required: TWILIO_*, OPENAI_API_KEY or ANTHROPIC_API_KEY, SECRET_KEY, ENCRYPTION_KEY
```

### 2. Start Services

```bash
# Start all services
docker compose up --build

# Or run in background
docker compose up -d --build
```

### 3. Initialize Database

```bash
# Run database migrations
docker compose exec api alembic upgrade head

# Seed with sample data
docker compose exec api python scripts/seed_data.py
```

### 4. Access Applications

- **API**: http://localhost:8000
- **Dashboard**: http://localhost:8501
- **SMTP (MailHog)**: http://localhost:8025

### 5. Setup Twilio Webhook

1. Get your ngrok URL: `ngrok http 8000`
2. Set webhook URL in Twilio: `https://your-ngrok-url.ngrok.io/api/twilio/inbound`
3. Update `TWILIO_WEBHOOK_SECRET` in `.env`

## 📋 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `TWILIO_ACCOUNT_SID` | Twilio Account SID | Yes |
| `TWILIO_AUTH_TOKEN` | Twilio Auth Token | Yes |
| `TWILIO_PHONE_NUMBER` | Your Twilio phone number | Yes |
| `OPENAI_API_KEY` | OpenAI API key | Yes* |
| `ANTHROPIC_API_KEY` | Anthropic API key | Yes* |
| `SECRET_KEY` | JWT secret key | Yes |
| `ENCRYPTION_KEY` | 32-byte encryption key | Yes |
| `NURSE_PHONE` | On-call nurse phone | Yes |
| `NURSE_EMAIL` | On-call nurse email | Yes |

*Either OpenAI or Anthropic API key is required

## 🏗️ Architecture

### Backend (FastAPI)
- **API**: RESTful endpoints for patients, enrollments, alerts
- **Database**: PostgreSQL with SQLAlchemy ORM
- **Scheduler**: APScheduler for message scheduling
- **Security**: JWT auth, encrypted PHI storage
- **Triage**: Rule-based + LLM classification

### Frontend (Streamlit)
- **Dashboard**: Nurse interface for patient management
- **Real-time**: Auto-refresh for alerts and metrics
- **Responsive**: Mobile-friendly design

### Marketing Website (Next.js)
- **Shifa AI Website**: Professional marketing site
- **Demo Requests**: Lead capture and conversion
- **SEO Optimized**: Production-ready marketing

### External Services
- **Twilio**: SMS sending/receiving
- **OpenAI/Anthropic**: AI-powered triage
- **MailHog**: Development SMTP server

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - User login

### Patients
- `POST /api/patients` - Create patient
- `GET /api/patients` - List patients (with filters)
- `GET /api/patients/{id}` - Get patient details
- `POST /api/patients/{id}/resolve` - Resolve alert

### Enrollments
- `POST /api/enrollments` - Create enrollment

### Twilio Webhooks
- `POST /api/twilio/inbound` - Handle inbound SMS

### Metrics
- `GET /api/metrics` - Dashboard metrics

## 🤖 AI Triage System

### Risk Levels
- **GREEN**: Patient doing well, continue monitoring
- **YELLOW**: Concerning symptoms, follow-up within 24-48h
- **RED**: Life-threatening, immediate medical attention

### Classification
1. **Rule-based**: Keyword matching for critical symptoms
2. **LLM-based**: OpenAI/Anthropic for nuanced analysis
3. **Fallback**: Conservative approach, err on side of caution

### Alert Flow
- **RED**: Instant SMS to on-call nurse + email
- **YELLOW**: Task in dashboard + email
- **GREEN**: Continue monitoring

## 🔒 Security & Privacy

### Data Protection
- **Encryption**: AES-256 for PHI at rest
- **Redaction**: Automatic PHI removal in Local Mode
- **Audit**: Complete access logging
- **HTTPS**: All communications encrypted

### Privacy Modes
- **Local Mode**: Redacts PHI after triage
- **Consent**: Opt-out mechanism via SMS
- **Retention**: Configurable data retention

## �� Metrics & Monitoring

### Key Metrics
- Enrollment count (7-day)
- Engagement rate (%)
- Red alerts (24-hour)
- Response latency

### Observability
- Structured logging
- Health checks
- Error tracking
- Performance metrics

## 🧪 Testing

### Seed Data
The seed script creates:
- 5 sample patients with different conditions
- Follow-up message templates
- Simulated responses (green/yellow/red)
- Test users (nurse/admin)

### Login Credentials
- **Nurse**: nurse@hospital.com / password123
- **Admin**: admin@hospital.com / admin123

## 🚀 Deployment

### Production Checklist
- [ ] Update `SECRET_KEY` and `ENCRYPTION_KEY`
- [ ] Configure proper CORS origins
- [ ] Set up production database
- [ ] Configure SMTP server
- [ ] Set up monitoring/logging
- [ ] Enable HTTPS
- [ ] Configure backup strategy

### Target Platforms
- **Render**: Easy deployment with Docker
- **Railway**: Simple container deployment
- **AWS/GCP**: Full control, enterprise features

## 📈 Pilot Instructions

### Success Metrics
- **Engagement Rate**: >70% patient response rate
- **Alert Accuracy**: <5% false positive rate
- **Response Time**: <2 minutes for red alerts
- **Readmission Reduction**: Track 30-day readmission rates

### ROI Calculation
```
Cost Savings = (Baseline Readmissions - Current Readmissions) × Average Readmission Cost
ROI = (Cost Savings - System Cost) / System Cost × 100
```

### Pilot Checklist
- [ ] Enroll 50-100 patients
- [ ] Train nursing staff
- [ ] Monitor for 30 days
- [ ] Collect feedback
- [ ] Measure outcomes
- [ ] Scale if successful

## 🔧 Development

### Local Development
```bash
# Install dependencies
pip install -r requirements.txt

# Run database migrations
alembic upgrade head

# Start API server
uvicorn app.main:app --reload

# Start worker
python -m app.worker

# Start frontend
streamlit run frontend/app.py
```

### Database Migrations
```bash
# Create migration
alembic revision --autogenerate -m "Description"

# Apply migrations
alembic upgrade head

# Rollback
alembic downgrade -1
```

## 📝 License

Proprietary - Shifa AI Care Transition Companion MVP

## 🤝 Support

For technical issues or questions:
- Check logs: `docker compose logs api`
- Database: `docker compose exec db psql -U ctc -d ctc`
- API docs: http://localhost:8000/docs

---

**Built with ❤️ for better patient outcomes**
