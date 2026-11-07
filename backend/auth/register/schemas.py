from typing import NotRequired, TypedDict

from pydantic import BaseModel, Field

from auth.display_name import MAX_DISPLAY_NAME_LENGTH
from auth.passkey import AuthenticatorAttestationResponse, PasskeyAttestation


class PasskeyRegistrationInitRequest(BaseModel):
    username: str = Field(min_length=1, max_length=MAX_DISPLAY_NAME_LENGTH)


class PasskeyRegistrationCompleteRequest(BaseModel):
    attestation: PasskeyAttestation

    def to_authentication_response(self) -> AuthenticatorAttestationResponse:
        return AuthenticatorAttestationResponse(response=self.attestation)


class RegistrationClientExtensionResults(TypedDict):
    credProps: NotRequired[dict[str, bool]]
