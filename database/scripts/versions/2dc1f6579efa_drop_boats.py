"""drop boats

Revision ID: 2dc1f6579efa
Revises: 61c25567c6e3
Create Date: 2026-11-07 20:05:11.577855

"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision: str = "2dc1f6579efa"
down_revision: str | Sequence[str] | None = "61c25567c6e3"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    """Drop the sample boat inventory, which has no model anymore."""
    op.drop_table("boats")


def downgrade() -> None:
    """Recreate the boats table as 0001_boats left it, without its sample row."""
    op.create_table(
        "boats",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("name", sa.String(120), nullable=False),
        sa.Column("daily_rate", sa.Numeric(10, 2), nullable=False),
        sa.UniqueConstraint("name"),
        sa.CheckConstraint("daily_rate >= 0", name="positive_daily_rate"),
    )
