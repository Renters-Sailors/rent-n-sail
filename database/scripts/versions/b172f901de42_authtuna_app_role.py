"""Configure an existing application role for AuthTuna.

Revision ID: b172f901de42
Revises: 7eac88f07b1d
"""

from alembic import op

revision = "b172f901de42"
down_revision = "7eac88f07b1d"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.execute("GRANT USAGE ON SCHEMA authtuna TO rent_n_sail_app")
    op.execute(
        "GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA authtuna "
        "TO rent_n_sail_app"
    )
    op.execute(
        "GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA authtuna TO rent_n_sail_app"
    )
    # The database name differs between environments (Neon defaults to neondb).
    op.execute(
        "DO $$ BEGIN EXECUTE format("
        "'ALTER ROLE rent_n_sail_app IN DATABASE %I SET search_path TO authtuna, public', "
        "current_database()); END $$"
    )


def downgrade() -> None:
    raise RuntimeError(
        "Cannot automatically undo role grants or search_path without knowing their previous state"
    )
