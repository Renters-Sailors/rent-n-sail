import logging
import secrets
from typing import Annotated

from authtuna.helpers import create_session_and_set_cookie
from authtuna.integrations import auth_service
from fastapi import APIRouter, Header, HTTPException, Request, Response

from auth.passkey import (
    PASSKEY_FLOW_USERNAME_SESSION_KEY,
    PASSKEY_REGISTER_CHALLENGE_SESSION_KEY,
    verify_registration,
)
from auth.register.requests import (
    PasskeyRegistrationCompleteRequest,
    PasskeyRegistrationInitRequest,
)

router = APIRouter(prefix="/passkey")
logger = logging.getLogger(__name__)


@router.post("/begin")
async def register_init(
    payload: PasskeyRegistrationInitRequest,
    request: Request,
) -> dict[str, object]:
    """Registration options for a new account. Changes nothing but the session, so the
    browser can ask for them ahead of the click; the account is created on complete."""
    username = payload.username.strip()
    if not username:
        raise HTTPException(422, "A username is required to register.")
    if await auth_service.users.get_by_username(username):
        raise HTTPException(409, "That username is taken. Try another.")

    # Only for the authenticator; login finds the account by credential id instead.
    user_handle = secrets.token_urlsafe(24)
    options, challenge = auth_service.passkeys.core.generate_registration_options(
        user_id=user_handle, username=username, existing_credentials=[]
    )
    request.session[PASSKEY_REGISTER_CHALLENGE_SESSION_KEY] = challenge
    request.session[PASSKEY_FLOW_USERNAME_SESSION_KEY] = username
    logger.info("Passkey registration options generated")
    return options


@router.post("/complete")
async def register_complete(
    payload: PasskeyRegistrationCompleteRequest,
    request: Request,
    response: Response,
    user_agent: Annotated[str | None, Header()] = None,
) -> dict[str, str]:
    challenge = request.session.pop(PASSKEY_REGISTER_CHALLENGE_SESSION_KEY, None)
    username = request.session.pop(PASSKEY_FLOW_USERNAME_SESSION_KEY, None)
    if challenge is None or username is None:
        logger.warning("Passkey registration rejected: challenge or username missing")
        raise HTTPException(400, "Passkey registration expired. Start again.")
    if user_agent is None:
        logger.warning("Passkey registration rejected: user_agent missing")
        raise HTTPException(400, "Passkey registration failed. Start again.")

    try:
        credential_data = verify_registration(
            response=payload.to_authentication_response(), session_challenge=challenge
        )
    except Exception as error:
        logger.exception("Passkey registration verification failed", exc_info=error)
        raise HTTPException(400, "Passkey registration failed.") from None

    try:
        user, _ = await auth_service.signup(
            username=username,
            email=f"{secrets.token_urlsafe(24)}@passkey.rent-n-sail.invalid",
            password=secrets.token_urlsafe(48),
            ip_address=request.state.user_ip_address,
        )
    except Exception as error:
        # Most likely taken between begin and complete.
        logger.exception("Passkey registration signup failed", exc_info=error)
        raise HTTPException(409, "That username is taken. Try another.") from None

    try:
        await auth_service.passkeys.save_new_credential(
            user_id=user.id, cred_data=credential_data, nickname=user_agent
        )
        await create_session_and_set_cookie(
            user, request, response, auth_service.db_manager.get_db()
        )
    except Exception as error:
        logger.exception("Passkey registration failed after signup", exc_info=error)
        await auth_service.users.delete(user.id)  # don't leave an account without a key
        raise HTTPException(400, "Passkey registration failed.") from None

    logger.info("Passkey registration succeeded")
    return {"username": user.username}
