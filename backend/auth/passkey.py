from typing import Any, NotRequired, TypedDict

from authtuna.core.database import PasskeyCredential
from authtuna.integrations import auth_service


class PasskeyAssertion(TypedDict):
    id: str
    response: AssertionAuthenticatorResult


class AssertionAuthenticatorResult(TypedDict):
    authenticatorData: str
    clientDataJSON: str
    signature: str


class PasskeyAttestation(TypedDict):
    response: AttestationAuthenticatorResult


class AttestationAuthenticatorResult(TypedDict):
    attestationObject: str
    clientDataJSON: str
    transports: NotRequired[list[str]]


# don't change anything below, unless you want to break the auth flow
PASSKEY_AUTH_CHALLENGE_SESSION_KEY = "passkey_authentication_challenge"
PASSKEY_REGISTER_CHALLENGE_SESSION_KEY = "passkey_registration_challenge"
PASSKEY_FLOW_USERNAME_SESSION_KEY = "passkey_flow_username"


class AuthenticatorAttestationResponse(TypedDict):
    response: PasskeyAttestation


class AuthenticatorAssertionResponse(TypedDict):
    response: PasskeyAssertion | None


class SessionChallenge(TypedDict):
    challenge: str  # base64 encoded challenge
    timestamp: int | float


# wrapper function to add proper type annotations
def verify_registration(
    response: AuthenticatorAttestationResponse, session_challenge: SessionChallenge
) -> dict[str, Any]:
    return auth_service.passkeys.core.verify_registration(
        response["response"], session_challenge
    )


def verify_authentication(
    response: AuthenticatorAssertionResponse,
    session_challenge: SessionChallenge,
    credential: PasskeyCredential,
) -> dict[str, Any]:
    return auth_service.passkeys.core.verify_authentication(
        response["response"], session_challenge, credential
    )


def without_large_blob(options: dict[str, object]) -> dict[str, object]:
    """Drops AuthTuna's largeBlob extension, which the app doesn't use. Safari rejects
    `{"read": true}` before showing any prompt ("Both read and write may not be present
    together in largeBlob")."""
    extensions = options.get("extensions")
    if isinstance(extensions, dict):
        options["extensions"] = {
            name: value for name, value in extensions.items() if name != "largeBlob"
        }
    return options
