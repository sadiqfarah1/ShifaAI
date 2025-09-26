from pydantic import BaseModel
from typing import Optional

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user_id: int
    user_email: str
    user_role: str
