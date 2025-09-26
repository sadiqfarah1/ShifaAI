from app.core.security import encrypt_data, decrypt_data

class EncryptionService:
    @staticmethod
    def encrypt_phone(phone: str) -> str:
        """Encrypt phone number for storage"""
        return encrypt_data(phone)
    
    @staticmethod
    def decrypt_phone(encrypted_phone: str) -> str:
        """Decrypt phone number for use"""
        return decrypt_data(encrypted_phone)
    
    @staticmethod
    def encrypt_message_body(body: str) -> str:
        """Encrypt message body for storage"""
        return encrypt_data(body)
    
    @staticmethod
    def decrypt_message_body(encrypted_body: str) -> str:
        """Decrypt message body for use"""
        return decrypt_data(encrypted_body)
    
    @staticmethod
    def redact_message_body(body: str) -> str:
        """Redact PHI from message body for privacy mode"""
        # Simple redaction - replace names, phone numbers, addresses
        import re
        
        # Redact phone numbers
        body = re.sub(r'\+?[1-9]\d{1,14}', '[PHONE]', body)
        
        # Redact common name patterns (basic)
        body = re.sub(r'\b[A-Z][a-z]+ [A-Z][a-z]+\b', '[NAME]', body)
        
        # Redact addresses (basic)
        body = re.sub(r'\d+\s+[A-Za-z\s]+(?:Street|St|Avenue|Ave|Road|Rd|Drive|Dr|Lane|Ln|Boulevard|Blvd)', '[ADDRESS]', body)
        
        return body
