from pydantic_settings import BaseSettings
from typing import Optional
import os

class Settings(BaseSettings):
    # Database
    database_url: str = "postgresql://ctc:ctc_dev_password@localhost:5432/ctc"
    redis_url: str = "redis://localhost:6379"
    
    # Twilio
    twilio_account_sid: str
    twilio_auth_token: str
    twilio_phone_number: str
    twilio_webhook_secret: str
    
    # LLM
    openai_api_key: Optional[str] = None
    anthropic_api_key: Optional[str] = None
    llm_provider: str = "openai"  # or anthropic
    
    # Security
    secret_key: str
    encryption_key: str
    
    # SMTP
    smtp_host: str = "localhost"
    smtp_port: int = 1025
    smtp_user: str = ""
    smtp_password: str = ""
    smtp_from: str = "noreply@ctc.com"
    
    # App Config
    debug: bool = True
    local_mode: bool = False
    nurse_phone: str
    nurse_email: str
    
    # API
    api_base_url: str = "http://localhost:8000"
    
    class Config:
        env_file = ".env"

settings = Settings()
