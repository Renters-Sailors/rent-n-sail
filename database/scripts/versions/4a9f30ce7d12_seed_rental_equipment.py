"""Seed rental equipment.

Revision ID: 4a9f30ce7d12
Revises: 5c87747ecb14
"""

from pathlib import Path

from alembic import op

revision: str = "4a9f30ce7d12"
down_revision: str = "5c87747ecb14"
branch_labels: str | None = None
depends_on: str | None = None


def upgrade() -> None:
    seed = Path(__file__).parent / "sql" / "rental_equipment.sql"
    op.execute(seed.read_text(encoding="utf-8"))
    # Explicit IDs do not advance PostgreSQL's serial sequence.
    op.execute(
        "SELECT setval(pg_get_serial_sequence('public.rental_equipment', 'id'), "
        "GREATEST((SELECT COALESCE(MAX(id), 1) FROM public.rental_equipment), "
        "(SELECT last_value FROM public.rental_equipment_id_seq)))"
    )


def downgrade() -> None:
    # Seeded rows may have been modified or referenced; do not delete user data.
    pass
