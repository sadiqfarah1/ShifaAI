from twilio.rest import Client
from twilio.request_validator import RequestValidator
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)

class TwilioService:
    def __init__(self):
        self.client = Client(settings.twilio_account_sid, settings.twilio_auth_token)
        self.validator = RequestValidator(settings.twilio_auth_token)
    
    def send_sms(self, to_phone: str, message: str) -> str:
        """Send SMS via Twilio"""
        try:
            message = self.client.messages.create(
                body=message,
                from_=settings.twilio_phone_number,
                to=to_phone
            )
            logger.info(f"SMS sent to {to_phone}: {message.sid}")
            return message.sid
        except Exception as e:
            logger.error(f"Failed to send SMS to {to_phone}: {e}")
            raise
    
    def verify_webhook(self, request_url: str, params: dict, signature: str) -> bool:
        """Verify Twilio webhook signature"""
        try:
            return self.validator.validate(request_url, params, signature)
        except Exception as e:
            logger.error(f"Webhook verification failed: {e}")
            return False
    
    def format_phone_number(self, phone: str) -> str:
        """Format phone number for Twilio"""
        # Remove all non-digit characters
        digits = ''.join(filter(str.isdigit, phone))
        
        # Add +1 if it's a 10-digit US number
        if len(digits) == 10:
            return f"+1{digits}"
        elif len(digits) == 11 and digits.startswith('1'):
            return f"+{digits}"
        elif phone.startswith('+'):
            return phone
        else:
            return f"+{digits}"
