from typing import Annotated

from authtuna import settings
from authtuna.core.database import User
from authtuna.core.encryption import encryption_utils
from authtuna.integrations import auth_service
from authtuna.integrations.fastapi_integration import get_current_user_optional
from fastapi import APIRouter, Depends, Request, Response
from pydantic import BaseModel

from auth.display_name import display_name

router = APIRouter(prefix="/session")


class SessionUser(BaseModel):
    username: str


@router.get("")
async def read_session(
    user: Annotated[User | None, Depends(get_current_user_optional)],
) -> SessionUser | None:
    """The signed-in user, or null, so signed-out visitors don't get an error."""
    return SessionUser(username=display_name(user)) if user else None


@router.delete("", status_code=204)
async def sign_out(request: Request, response: Response) -> None:
    """Signs out. Public to AuthTuna's middleware, so it reads the cookie itself."""
    token = request.cookies.get(settings.SESSION_TOKEN_NAME)
    session = encryption_utils.decode_jwt_token(token) if token else None
    session_id = session.get("session") if session else None
    if session_id:
        await auth_service.sessions.terminate(session_id, request.state.user_ip_address)
    response.delete_cookie(
        settings.SESSION_TOKEN_NAME,
        samesite=settings.SESSION_SAME_SITE,
        secure=settings.SESSION_SECURE,
        httponly=True,
        domain=settings.SESSION_COOKIE_DOMAIN,
    )
