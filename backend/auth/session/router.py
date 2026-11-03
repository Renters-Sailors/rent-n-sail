from typing import Annotated

from authtuna import settings
from authtuna.core.database import User
from authtuna.integrations import auth_service
from authtuna.integrations.fastapi_integration import get_current_user_optional
from fastapi import APIRouter, Depends, Request, Response
from pydantic import BaseModel

router = APIRouter(prefix="/session")


class SessionUser(BaseModel):
    username: str


@router.get("")
async def read_session(
    user: Annotated[User | None, Depends(get_current_user_optional)],
) -> SessionUser | None:
    """The signed-in user, or null, so signed-out visitors don't get an error."""
    return SessionUser(username=user.username) if user else None


@router.delete("", status_code=204)
async def sign_out(request: Request, response: Response) -> None:
    session_id = getattr(request.state, "session_id", None)
    if session_id:
        await auth_service.sessions.terminate(session_id, request.state.user_ip_address)
    response.delete_cookie(
        settings.SESSION_TOKEN_NAME,
        samesite=settings.SESSION_SAME_SITE,
        secure=settings.SESSION_SECURE,
        httponly=True,
        domain=settings.SESSION_COOKIE_DOMAIN,
    )
