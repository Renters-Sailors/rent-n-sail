"""authtuna

Revision ID: 51813c9846d7
Revises: 2dc1f6579efa
Create Date: 2026-11-07 20:21:17.579396

"""

import pathlib
from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = "51813c9846d7"
down_revision: str | Sequence[str] | None = "2dc1f6579efa"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def recreate_schema() -> None:
    """Drop everything in authtuna and give the app role access to it again."""
    op.execute("DROP SCHEMA authtuna CASCADE")
    op.execute("CREATE SCHEMA authtuna")
    op.execute("GRANT USAGE ON SCHEMA authtuna TO rent_n_sail_app")


def grant_tables() -> None:
    op.execute(
        "GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA authtuna "
        "TO rent_n_sail_app"
    )
    op.execute(
        "GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA authtuna TO rent_n_sail_app"
    )


def upgrade() -> None:
    """Recreate AuthTuna's tables from its models. Existing AuthTuna data is lost."""
    recreate_schema()
    op.create_table(
        "deleted_users",
        sa.Column("user_id", sa.String(length=64), nullable=False),
        sa.Column("email", sa.String(length=255), nullable=False),
        sa.Column("data", postgresql.JSONB(), nullable=True),
        sa.Column("data_encrypted", sa.LargeBinary(), nullable=True),
        sa.Column("initiated_at", sa.Float(), nullable=False),
        sa.Column("cleanup_counter", sa.Integer(), nullable=False),
        sa.PrimaryKeyConstraint("user_id"),
        schema="authtuna",
    )
    op.create_table(
        "encryption_keys",
        sa.Column("id", sa.String(length=64), nullable=False),
        sa.Column("key_ciphertext", sa.Text(), nullable=False),
        sa.Column("created_at", sa.Float(), nullable=False),
        sa.Column("deleted_at", sa.Float(), nullable=True),
        sa.PrimaryKeyConstraint("id"),
        schema="authtuna",
    )
    op.create_table(
        "permissions",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("name", sa.String(length=80), nullable=False),
        sa.Column("description", sa.String(length=255), nullable=True),
        sa.Column("system", sa.Boolean(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("name"),
        schema="authtuna",
    )
    op.create_table(
        "roles",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("name", sa.String(length=80), nullable=False),
        sa.Column("description", sa.String(length=255), nullable=True),
        sa.Column("system", sa.Boolean(), nullable=False),
        sa.Column("level", sa.Integer(), nullable=True),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("name"),
        schema="authtuna",
    )
    op.create_table(
        "role_assign_permissions",
        sa.Column("assigner_role_id", sa.Integer(), nullable=False),
        sa.Column("assignable_role_id", sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(
            ["assignable_role_id"],
            ["authtuna.roles.id"],
        ),
        sa.ForeignKeyConstraint(
            ["assigner_role_id"],
            ["authtuna.roles.id"],
        ),
        sa.PrimaryKeyConstraint("assigner_role_id", "assignable_role_id"),
        schema="authtuna",
    )
    op.create_table(
        "role_grant_permissions",
        sa.Column("granter_role_id", sa.Integer(), nullable=False),
        sa.Column("grantable_permission_id", sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(
            ["grantable_permission_id"],
            ["authtuna.permissions.id"],
        ),
        sa.ForeignKeyConstraint(
            ["granter_role_id"],
            ["authtuna.roles.id"],
        ),
        sa.PrimaryKeyConstraint("granter_role_id", "grantable_permission_id"),
        schema="authtuna",
    )
    op.create_table(
        "users",
        sa.Column("id", sa.String(length=64), nullable=False),
        sa.Column("username", postgresql.CITEXT(), nullable=False),
        sa.Column("email", postgresql.CITEXT(), nullable=False),
        sa.Column("email_encrypted", sa.LargeBinary(), nullable=True),
        sa.Column("email_key_id", sa.String(length=64), nullable=True),
        sa.Column("is_active", sa.Boolean(), nullable=False),
        sa.Column("password_hash", sa.String(length=256), nullable=True),
        sa.Column("email_verified", sa.Boolean(), nullable=False),
        sa.Column("requires_password_reset", sa.Boolean(), nullable=False),
        sa.Column("mfa_enabled", sa.Boolean(), nullable=False),
        sa.Column("created_at", sa.Float(), nullable=False),
        sa.Column("last_login", sa.Float(), nullable=False),
        sa.ForeignKeyConstraint(
            ["email_key_id"],
            ["authtuna.encryption_keys.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_users_email"),
        "users",
        ["email"],
        unique=True,
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_users_id"), "users", ["id"], unique=False, schema="authtuna"
    )
    op.create_index(
        op.f("ix_authtuna_users_username"),
        "users",
        ["username"],
        unique=True,
        schema="authtuna",
    )
    op.create_table(
        "api_keys",
        sa.Column("id", sa.String(length=64), nullable=False),
        sa.Column("hashed_key", sa.String(length=256), nullable=False),
        sa.Column("user_id", sa.String(length=64), nullable=False),
        sa.Column("key_type", sa.String(length=20), nullable=False),
        sa.Column("name", sa.String(length=100), nullable=True),
        sa.Column("created_at", sa.Float(), nullable=False),
        sa.Column("last_used_at", sa.Float(), nullable=True),
        sa.Column("expires_at", sa.Float(), nullable=True),
        sa.ForeignKeyConstraint(["user_id"], ["authtuna.users.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("hashed_key"),
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_api_keys_id"),
        "api_keys",
        ["id"],
        unique=False,
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_api_keys_user_id"),
        "api_keys",
        ["user_id"],
        unique=False,
        schema="authtuna",
    )
    op.create_table(
        "audit_events",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("user_id", sa.String(length=64), nullable=True),
        sa.Column("event_type", sa.String(length=100), nullable=False),
        sa.Column("timestamp", sa.Float(), nullable=False),
        sa.Column("ip_address", sa.String(length=45), nullable=True),
        sa.Column("ip_address_encrypted", sa.LargeBinary(), nullable=True),
        sa.Column("ip_address_hash", sa.String(length=64), nullable=True),
        sa.Column("details", postgresql.JSONB(), nullable=True),
        sa.ForeignKeyConstraint(
            ["user_id"],
            ["authtuna.users.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_audit_events_event_type"),
        "audit_events",
        ["event_type"],
        unique=False,
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_audit_events_ip_address_hash"),
        "audit_events",
        ["ip_address_hash"],
        unique=False,
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_audit_events_user_id"),
        "audit_events",
        ["user_id"],
        unique=False,
        schema="authtuna",
    )
    op.create_table(
        "mfa_methods",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("user_id", sa.String(length=64), nullable=False),
        sa.Column("method_type", sa.String(length=20), nullable=False),
        sa.Column("secret", sa.String(length=255), nullable=True),
        sa.Column("is_verified", sa.Boolean(), nullable=False),
        sa.ForeignKeyConstraint(
            ["user_id"],
            ["authtuna.users.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_mfa_methods_user_id"),
        "mfa_methods",
        ["user_id"],
        unique=False,
        schema="authtuna",
    )
    op.create_table(
        "mfa_recovery_codes",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("user_id", sa.String(length=64), nullable=False),
        sa.Column("hashed_code", sa.String(length=256), nullable=False),
        sa.Column("is_used", sa.Boolean(), nullable=False),
        sa.Column("actived_at", sa.Float(), nullable=True),
        sa.Column("active", sa.Boolean(), nullable=False),
        sa.ForeignKeyConstraint(
            ["user_id"],
            ["authtuna.users.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("hashed_code"),
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_mfa_recovery_codes_user_id"),
        "mfa_recovery_codes",
        ["user_id"],
        unique=False,
        schema="authtuna",
    )
    op.create_table(
        "organization",
        sa.Column("id", sa.String(length=64), nullable=False),
        sa.Column("name", sa.String(length=100), nullable=False),
        sa.Column("owner_id", sa.String(length=64), nullable=False),
        sa.Column("created_at", sa.Float(), nullable=False),
        sa.ForeignKeyConstraint(
            ["owner_id"],
            ["authtuna.users.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("name"),
        schema="authtuna",
    )
    op.create_table(
        "passkey_credentials",
        sa.Column("id", sa.LargeBinary(length=1023), nullable=False),
        sa.Column("user_id", sa.String(length=64), nullable=False),
        sa.Column("nickname", sa.String(length=100), nullable=False),
        sa.Column("public_key", sa.LargeBinary(), nullable=False),
        sa.Column("sign_count", sa.Integer(), nullable=False),
        sa.Column("aaguid", sa.LargeBinary(length=16), nullable=True),
        sa.Column("is_discoverable", sa.Boolean(), nullable=False),
        sa.Column("is_backup_eligible", sa.Boolean(), nullable=False),
        sa.Column("is_backed_up", sa.Boolean(), nullable=False),
        sa.Column("transports", postgresql.JSONB(), nullable=True),
        sa.Column("created_at", sa.Float(), nullable=False),
        sa.Column("last_used_at", sa.Float(), nullable=False),
        sa.ForeignKeyConstraint(["user_id"], ["authtuna.users.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_passkey_credentials_user_id"),
        "passkey_credentials",
        ["user_id"],
        unique=False,
        schema="authtuna",
    )
    op.create_table(
        "role_permissions",
        sa.Column("role_id", sa.Integer(), nullable=False),
        sa.Column("permission_id", sa.Integer(), nullable=False),
        sa.Column("added_by_id", sa.String(length=64), nullable=True),
        sa.Column("added_at", sa.Float(), nullable=False),
        sa.ForeignKeyConstraint(
            ["added_by_id"],
            ["authtuna.users.id"],
        ),
        sa.ForeignKeyConstraint(
            ["permission_id"],
            ["authtuna.permissions.id"],
        ),
        sa.ForeignKeyConstraint(
            ["role_id"],
            ["authtuna.roles.id"],
        ),
        sa.PrimaryKeyConstraint("role_id", "permission_id"),
        schema="authtuna",
    )
    op.create_table(
        "sessions",
        sa.Column("session_id", sa.String(length=32), nullable=False),
        sa.Column("user_id", sa.String(length=64), nullable=False),
        sa.Column("region", sa.String(length=255), nullable=True),
        sa.Column("device", sa.String(length=255), nullable=True),
        sa.Column("active", sa.Boolean(), nullable=False),
        sa.Column("ctime", sa.Float(), nullable=False),
        sa.Column("mtime", sa.Float(), nullable=False),
        sa.Column("etime", sa.Float(), nullable=False),
        sa.Column("e_abs_time", sa.Float(), nullable=False),
        sa.Column("create_ip", sa.String(length=45), nullable=True),
        sa.Column("last_ip", sa.String(length=45), nullable=True),
        sa.Column("random_string", sa.String(length=255), nullable=False),
        sa.Column("previous_random_strings", postgresql.JSONB(), nullable=False),
        sa.ForeignKeyConstraint(
            ["user_id"],
            ["authtuna.users.id"],
        ),
        sa.PrimaryKeyConstraint("session_id"),
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_sessions_user_id"),
        "sessions",
        ["user_id"],
        unique=False,
        schema="authtuna",
    )
    op.create_table(
        "social_accounts",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("user_id", sa.String(length=64), nullable=False),
        sa.Column("extra_data", postgresql.JSONB(), nullable=True),
        sa.Column("created_at", sa.Float(), nullable=False),
        sa.Column("last_used_at", sa.Float(), nullable=False),
        sa.Column("provider", sa.String(length=50), nullable=False),
        sa.Column("provider_user_id", sa.String(length=255), nullable=False),
        sa.Column("token_type", sa.String(length=40), nullable=False),
        sa.Column("access_token", sa.String(length=1200), nullable=False),
        sa.Column("refresh_token", sa.String(length=1200), nullable=True),
        sa.Column("extra_data_encrypted", sa.LargeBinary(), nullable=True),
        sa.Column("expires_at", sa.Integer(), nullable=True),
        sa.Column("client_id", sa.String(length=48), nullable=True),
        sa.Column("client_secret", sa.String(length=120), nullable=True),
        sa.Column("client_id_issued_at", sa.Integer(), nullable=False),
        sa.Column("client_secret_expires_at", sa.Integer(), nullable=False),
        sa.Column("client_metadata", sa.Text(), nullable=True),
        sa.ForeignKeyConstraint(
            ["user_id"],
            ["authtuna.users.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_social_accounts_client_id"),
        "social_accounts",
        ["client_id"],
        unique=False,
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_social_accounts_provider"),
        "social_accounts",
        ["provider"],
        unique=False,
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_social_accounts_provider_user_id"),
        "social_accounts",
        ["provider_user_id"],
        unique=False,
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_social_accounts_user_id"),
        "social_accounts",
        ["user_id"],
        unique=False,
        schema="authtuna",
    )
    op.create_table(
        "tokens",
        sa.Column("id", sa.String(length=64), nullable=False),
        sa.Column("purpose", sa.String(length=200), nullable=False),
        sa.Column("user_id", sa.String(length=64), nullable=False),
        sa.Column("ctime", sa.Float(), nullable=False),
        sa.Column("etime", sa.Float(), nullable=False),
        sa.Column("used", sa.Boolean(), nullable=False),
        sa.Column("new_gen_id", sa.String(length=64), nullable=True),
        sa.ForeignKeyConstraint(
            ["new_gen_id"],
            ["authtuna.tokens.id"],
        ),
        sa.ForeignKeyConstraint(
            ["user_id"],
            ["authtuna.users.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_tokens_purpose"),
        "tokens",
        ["purpose"],
        unique=False,
        schema="authtuna",
    )
    op.create_index(
        op.f("ix_authtuna_tokens_user_id"),
        "tokens",
        ["user_id"],
        unique=False,
        schema="authtuna",
    )
    op.create_table(
        "user_roles",
        sa.Column("user_id", sa.String(length=64), nullable=False),
        sa.Column("role_id", sa.Integer(), nullable=False),
        sa.Column("scope", sa.String(length=255), nullable=False),
        sa.Column("given_by_id", sa.VARCHAR(length=64), nullable=False),
        sa.Column("given_at", sa.Float(), nullable=False),
        sa.ForeignKeyConstraint(
            ["role_id"],
            ["authtuna.roles.id"],
        ),
        sa.ForeignKeyConstraint(
            ["user_id"],
            ["authtuna.users.id"],
        ),
        sa.PrimaryKeyConstraint("user_id", "role_id", "scope"),
        schema="authtuna",
    )
    op.create_table(
        "api_key_scopes",
        sa.Column("api_key_id", sa.String(length=64), nullable=False),
        sa.Column("user_id", sa.String(length=64), nullable=False),
        sa.Column("role_id", sa.Integer(), nullable=False),
        sa.Column("scope", sa.String(length=255), nullable=False),
        sa.ForeignKeyConstraint(
            ["api_key_id"], ["authtuna.api_keys.id"], ondelete="CASCADE"
        ),
        sa.ForeignKeyConstraint(
            ["user_id", "role_id", "scope"],
            [
                "authtuna.user_roles.user_id",
                "authtuna.user_roles.role_id",
                "authtuna.user_roles.scope",
            ],
            ondelete="CASCADE",
        ),
        sa.PrimaryKeyConstraint("api_key_id", "user_id", "role_id", "scope"),
        schema="authtuna",
    )
    op.create_table(
        "organization_members",
        sa.Column("user_id", sa.String(length=64), nullable=False),
        sa.Column("organization_id", sa.String(length=64), nullable=False),
        sa.Column("joined_at", sa.Float(), nullable=False),
        sa.ForeignKeyConstraint(
            ["organization_id"],
            ["authtuna.organization.id"],
        ),
        sa.ForeignKeyConstraint(
            ["user_id"],
            ["authtuna.users.id"],
        ),
        sa.PrimaryKeyConstraint("user_id", "organization_id"),
        schema="authtuna",
    )
    op.create_table(
        "team",
        sa.Column("id", sa.String(length=64), nullable=False),
        sa.Column("name", sa.String(length=100), nullable=False),
        sa.Column("organization_id", sa.String(length=64), nullable=False),
        sa.Column("created_at", sa.Float(), nullable=False),
        sa.ForeignKeyConstraint(
            ["organization_id"],
            ["authtuna.organization.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
        schema="authtuna",
    )
    op.create_table(
        "team_members",
        sa.Column("user_id", sa.String(length=64), nullable=False),
        sa.Column("team_id", sa.String(length=64), nullable=False),
        sa.Column("joined_at", sa.Float(), nullable=False),
        sa.ForeignKeyConstraint(
            ["team_id"],
            ["authtuna.team.id"],
        ),
        sa.ForeignKeyConstraint(
            ["user_id"],
            ["authtuna.users.id"],
        ),
        sa.PrimaryKeyConstraint("user_id", "team_id"),
        schema="authtuna",
    )
    grant_tables()


def downgrade() -> None:
    """Recreate AuthTuna's tables from the SQL dump. Existing AuthTuna data is lost."""
    recreate_schema()
    sql = (pathlib.Path(__file__).parent / "sql" / "authtuna.sql").read_text()
    bind = op.get_bind()
    bind.connection.run_async(lambda connection: connection.execute(sql))
    grant_tables()
