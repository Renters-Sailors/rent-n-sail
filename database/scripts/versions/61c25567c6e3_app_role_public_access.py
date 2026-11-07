"""app role public access

Revision ID: 61c25567c6e3
Revises: ea77e521d1c0
Create Date: 2026-11-07 09:04:37.028514

"""

from collections.abc import Sequence

from alembic import op

# revision identifiers, used by Alembic.
revision: str = "61c25567c6e3"
down_revision: str | Sequence[str] | None = "ea77e521d1c0"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    """Let the backend's app role use tables in public, now and in later migrations."""
    op.execute("GRANT USAGE ON SCHEMA public TO rent_n_sail_app")
    op.execute(
        "GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public "
        "TO rent_n_sail_app"
    )
    op.execute(
        "GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO rent_n_sail_app"
    )
    # Migrations run as the owner, so tables they create later get the same grants.
    op.execute(
        "ALTER DEFAULT PRIVILEGES IN SCHEMA public "
        "GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO rent_n_sail_app"
    )
    op.execute(
        "ALTER DEFAULT PRIVILEGES IN SCHEMA public "
        "GRANT USAGE, SELECT ON SEQUENCES TO rent_n_sail_app"
    )


def downgrade() -> None:
    """Downgrade schema."""
    op.execute(
        "ALTER DEFAULT PRIVILEGES IN SCHEMA public "
        "REVOKE USAGE, SELECT ON SEQUENCES FROM rent_n_sail_app"
    )
    op.execute(
        "ALTER DEFAULT PRIVILEGES IN SCHEMA public "
        "REVOKE SELECT, INSERT, UPDATE, DELETE ON TABLES FROM rent_n_sail_app"
    )
    op.execute("REVOKE ALL ON ALL SEQUENCES IN SCHEMA public FROM rent_n_sail_app")
    op.execute("REVOKE ALL ON ALL TABLES IN SCHEMA public FROM rent_n_sail_app")
    op.execute("REVOKE USAGE ON SCHEMA public FROM rent_n_sail_app")
