"""setup

Revision ID: c293854405c5
Revises:
Create Date: 2026-11-07 20:35:15.694841

"""

from collections.abc import Sequence

from alembic import op

# revision identifiers, used by Alembic.
revision: str = "c293854405c5"
down_revision: str | Sequence[str] | None = None
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


APP_ROLE = "rent_n_sail_app"


def upgrade() -> None:
    """Set up what autogenerate can't: extensions and the app role's access."""
    # AuthTuna's case-insensitive columns are citext.
    op.execute("CREATE EXTENSION IF NOT EXISTS citext")
    op.execute(f"GRANT USAGE ON SCHEMA public TO {APP_ROLE}")
    # Migrations run as the owner, so every table they create later is granted too.
    op.execute(
        "ALTER DEFAULT PRIVILEGES IN SCHEMA public "
        f"GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO {APP_ROLE}"
    )
    op.execute(
        "ALTER DEFAULT PRIVILEGES IN SCHEMA public "
        f"GRANT USAGE, SELECT ON SEQUENCES TO {APP_ROLE}"
    )


def downgrade() -> None:
    op.execute(
        "ALTER DEFAULT PRIVILEGES IN SCHEMA public "
        f"REVOKE USAGE, SELECT ON SEQUENCES FROM {APP_ROLE}"
    )
    op.execute(
        "ALTER DEFAULT PRIVILEGES IN SCHEMA public "
        f"REVOKE SELECT, INSERT, UPDATE, DELETE ON TABLES FROM {APP_ROLE}"
    )
    op.execute(f"REVOKE USAGE ON SCHEMA public FROM {APP_ROLE}")
    op.execute("DROP EXTENSION IF EXISTS citext")
