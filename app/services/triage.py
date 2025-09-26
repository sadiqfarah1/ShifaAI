import json
import re
from typing import Dict, List, Tuple
from app.models.triage_result import RiskLevel
from app.core.config import settings
import openai
import anthropic

class TriageService:
    def __init__(self):
        self.openai_client = openai.OpenAI(api_key=settings.openai_api_key) if settings.openai_api_key else None
        self.anthropic_client = anthropic.Anthropic(api_key=settings.anthropic_api_key) if settings.anthropic_api_key else None
    
    def triage_message(self, message_text: str, condition: str, days_since_discharge: int) -> Dict:
        """Triage a patient message and return risk assessment"""
        
        # First try rule-based classification
        rule_result = self._rule_based_triage(message_text)
        
        # Then try LLM classification
        llm_result = self._llm_triage(message_text, condition, days_since_discharge)
        
        # Use the more severe result
        if self._is_more_severe(rule_result['risk'], llm_result['risk']):
            return rule_result
        else:
            return llm_result
    
    def _rule_based_triage(self, message_text: str) -> Dict:
        """Rule-based triage using keyword matching"""
        text_lower = message_text.lower()
        
        # RED keywords (life-threatening)
        red_keywords = [
            "chest pain", "short of breath", "can't breathe", "can not breathe",
            "fainting", "black stools", "cannot keep meds down", "can't keep meds down",
            "oxygen < 90", "confused", "suicidal", "severe pain", "unable to walk"
        ]
        
        # YELLOW keywords (concerning)
        yellow_keywords = [
            "dizzy", "dizziness", "swollen ankles", "missed pills", "nausea",
            "in pain 6/10", "no follow-up scheduled", "mild pain", "tired",
            "weak", "uncomfortable"
        ]
        
        # Check for red keywords
        for keyword in red_keywords:
            if keyword in text_lower:
                return {
                    "risk": RiskLevel.RED,
                    "reasons": [f"Keyword match: {keyword}"],
                    "action_hint": "Immediate medical attention required",
                    "confidence": 0.9,
                    "model_name": "rule_based"
                }
        
        # Check for yellow keywords
        for keyword in yellow_keywords:
            if keyword in text_lower:
                return {
                    "risk": RiskLevel.YELLOW,
                    "reasons": [f"Keyword match: {keyword}"],
                    "action_hint": "Schedule follow-up within 24 hours",
                    "confidence": 0.8,
                    "model_name": "rule_based"
                }
        
        # Default to green
        return {
            "risk": RiskLevel.GREEN,
            "reasons": ["No concerning symptoms detected"],
            "action_hint": "Continue monitoring",
            "confidence": 0.7,
            "model_name": "rule_based"
        }
    
    def _llm_triage(self, message_text: str, condition: str, days_since_discharge: int) -> Dict:
        """LLM-based triage using OpenAI or Anthropic"""
        
        prompt = self._build_triage_prompt(message_text, condition, days_since_discharge)
        
        try:
            if settings.llm_provider == "openai" and self.openai_client:
                return self._call_openai(prompt)
            elif settings.llm_provider == "anthropic" and self.anthropic_client:
                return self._call_anthropic(prompt)
            else:
                # Fallback to rule-based
                return self._rule_based_triage(message_text)
        except Exception as e:
            print(f"LLM triage failed: {e}")
            return self._rule_based_triage(message_text)
    
    def _build_triage_prompt(self, message_text: str, condition: str, days_since_discharge: int) -> str:
        return f"""You are a post-discharge triage classifier for {condition} patients. 
Classify this patient SMS message into green/yellow/red risk levels.

Patient condition: {condition}
Days since discharge: {days_since_discharge}
Patient message: "{message_text}"

Risk levels:
- GREEN: Patient is doing well, no concerning symptoms
- YELLOW: Some concerning symptoms, needs follow-up within 24-48 hours  
- RED: Life-threatening symptoms, needs immediate medical attention

Be conservative - err on the side of caution for life-threatening symptoms.

Respond with ONLY valid JSON in this exact format:
{{
  "risk": "green|yellow|red",
  "reasons": ["reason1", "reason2"],
  "action_hint": "specific recommended action",
  "confidence": 0.0
}}"""
    
    def _call_openai(self, prompt: str) -> Dict:
        """Call OpenAI API for triage"""
        response = self.openai_client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a medical triage assistant. Respond only with valid JSON."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.1,
            max_tokens=500
        )
        
        return self._parse_llm_response(response.choices[0].message.content)
    
    def _call_anthropic(self, prompt: str) -> Dict:
        """Call Anthropic API for triage"""
        response = self.anthropic_client.messages.create(
            model="claude-3-sonnet-20240229",
            max_tokens=500,
            temperature=0.1,
            messages=[{"role": "user", "content": prompt}]
        )
        
        return self._parse_llm_response(response.content[0].text)
    
    def _parse_llm_response(self, response_text: str) -> Dict:
        """Parse LLM response and validate JSON"""
        try:
            # Extract JSON from response
            json_match = re.search(r'\{.*\}', response_text, re.DOTALL)
            if json_match:
                json_str = json_match.group()
            else:
                json_str = response_text
            
            result = json.loads(json_str)
            
            # Validate required fields
            if not all(key in result for key in ['risk', 'reasons', 'action_hint', 'confidence']):
                raise ValueError("Missing required fields")
            
            # Validate risk level
            if result['risk'] not in ['green', 'yellow', 'red']:
                raise ValueError("Invalid risk level")
            
            # Convert to enum
            result['risk'] = RiskLevel(result['risk'])
            result['model_name'] = settings.llm_provider
            
            return result
            
        except (json.JSONDecodeError, ValueError, KeyError) as e:
            print(f"Failed to parse LLM response: {e}")
            # Fallback to rule-based
            return self._rule_based_triage("")
    
    def _is_more_severe(self, risk1: RiskLevel, risk2: RiskLevel) -> bool:
        """Check if risk1 is more severe than risk2"""
        severity_order = {RiskLevel.GREEN: 0, RiskLevel.YELLOW: 1, RiskLevel.RED: 2}
        return severity_order[risk1] > severity_order[risk2]
