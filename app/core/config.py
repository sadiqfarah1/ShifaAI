from pydantic import BaseSettings
from typing import Optional
import os

class Settings(BaseSettings):
    # Database
    database_url: str = "postgresql://ctc:ctc_dev_password@localhost:5432/ctc"
    redis_url: str = "redis://localhost:6379"
    
    # Twilio
    twilio_account_sid: str = ""
    twilio_auth_token: str = ""
    twilio_phone_number: str = ""
    twilio_webhook_secret: str = ""
    
    # LLM
    openai_api_key: str = ""
    anthropic_api_key: str = ""
    
    # Security
    secret_key: str = "your-secret-key-here"
    encryption_key: str = "your-encryption-key-here"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    
    # SMTP
    smtp_server: str = "smtp.gmail.com"
    smtp_port: int = 587
    smtp_username: str = ""
    smtp_password: str = ""
    
    # App
    app_name: str = "Care Transition Companion"
    debug: bool = False
    nurse_phone: str = ""
    nurse_email: str = ""
    
    class Config:
        env_file = ".env"

settings = Settings()
