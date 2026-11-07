"""authtuna index names

Revision ID: e9548f48af40
Revises: 2dc1f6579efa
Create Date: 2026-11-07 20:17:00.326446

"""

from collections.abc import Sequence

from alembic import op

# revision identifiers, used by Alembic.
revision: str = "e9548f48af40"
down_revision: str | Sequence[str] | None = "2dc1f6579efa"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None

# AuthTuna's indexes, as named once its models are placed in the authtuna schema
# (ix_<schema>_<table>_<column>).
INDEXES = (
    "api_keys_id",
    "api_keys_user_id",
    "audit_events_event_type",
    "audit_events_ip_address_hash",
    "audit_events_user_id",
    "mfa_methods_user_id",
    "mfa_recovery_codes_user_id",
    "passkey_credentials_user_id",
    "sessions_user_id",
    "social_accounts_client_id",
    "social_accounts_provider",
    "social_accounts_provider_user_id",
    "social_accounts_user_id",
    "tokens_purpose",
    "tokens_user_id",
    "users_email",
    "users_id",
    "users_username",
)


def upgrade() -> None:
    """Rename AuthTuna's indexes to ix_authtuna_<table>_<column>."""
    for name in INDEXES:
        op.execute(f"ALTER INDEX authtuna.ix_{name} RENAME TO ix_authtuna_{name}")


def downgrade() -> None:
    """Restore the index names from the AuthTuna SQL dump."""
    for name in INDEXES:
        op.execute(f"ALTER INDEX authtuna.ix_authtuna_{name} RENAME TO ix_{name}")
