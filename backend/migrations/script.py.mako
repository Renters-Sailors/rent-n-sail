"""${message}

Revision ID: ${up_revision}
Revises: ${down_revision | comma,n}
Create Date: ${create_date}

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
${imports if imports else ""}

# revision identifiers, used by Alembic.
revision: str = ${repr(up_revision)}
down_revision: Union[str, Sequence[str], None] = ${repr(down_revision)}
branch_labels: Union[str, Sequence[str], None] = ${repr(branch_labels)}
depends_on: Union[str, Sequence[str], None] = ${repr(depends_on)}


## Every revision starts with these imports, and the Ruff post-write hook in
## pyproject.toml removes the unused ones. authtuna.core.database stays only
## where autogenerate wrote AuthTuna's column types, which it does without
## importing them. It's imported inside the functions because importing it
## needs AuthTuna's settings, which database/scripts/env.py sets only when
## migrations run; `alembic history` and `revision` load revision files
## without that.
## Python to gówno: zaimportowanie modułu wykonuje jego kod, więc sam import
## typu kolumny wymaga skonfigurowanej AuthTuny.
def upgrade() -> None:
    """Upgrade schema."""
    import authtuna.core.database  # AuthTuna's column types; Ruff drops it if unused
    ${upgrades if upgrades else "pass"}


def downgrade() -> None:
    """Downgrade schema."""
    import authtuna.core.database  # AuthTuna's column types; Ruff drops it if unused
    ${downgrades if downgrades else "pass"}
