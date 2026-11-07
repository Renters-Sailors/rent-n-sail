"""Grant the app role access to AuthTuna and put its schema on the search path.

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
    # AuthTuna's tables have no schema prefix, so search_path must include authtuna.
    # Set it on the database: the owner may change that, but not a role it did not create.
    # public comes first so migrations keep creating tables there.
    # The database name differs between environments (Neon defaults to neondb).
    op.execute(
        "DO $$ BEGIN EXECUTE format("
        """'ALTER DATABASE %I SET search_path TO "$user", public, authtuna', """
        "current_database()); END $$"
    )


def downgrade() -> None:
    raise RuntimeError(
        "Cannot automatically undo role grants or search_path without knowing their previous state"
    )
