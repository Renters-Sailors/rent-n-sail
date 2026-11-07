"""Alembic environment for generating revisions from the backend models.

Revisions are written to database/scripts/versions, where the database
component applies them. Only revision commands are meant to run from here.
"""

import os
from typing import Literal

# alembic is a dev dependency: it only generates revisions locally.
# noinspection PyPackageRequirements
from alembic import context
from alembic.autogenerate.api import AutogenContext
from sqlalchemy import create_engine
from sqlalchemy.engine import make_url
from sqlalchemy.pool import NullPool
from sqlalchemy.sql.schema import SchemaItem
from sqlalchemy.types import TypeEngine

import main  # noqa: F401  # configures AuthTuna before its models are imported

# isort: split
from authtuna.core.database import Base as AuthTunaBase
from authtuna.core.database import CaseInsensitiveText, JsonType

from models import Base

DEFAULT_URL = "postgresql://postgres:admin@localhost:5432/rent_n_sail"

# The database component doesn't install AuthTuna, so its column types are
# written as the PostgreSQL types they map to.
AUTHTUNA_TYPES = {
    CaseInsensitiveText: "postgresql.CITEXT()",
    JsonType: "postgresql.JSONB()",
}


def render_item(
    type_: str, obj: TypeEngine | SchemaItem, autogen_context: AutogenContext
) -> str | Literal[False]:
    """Render AuthTuna's column types; False lets Alembic render the rest."""
    rendered = AUTHTUNA_TYPES.get(type(obj)) if type_ == "type" else None
    if rendered is None:
        return False
    autogen_context.imports.add("from sqlalchemy.dialects import postgresql")
    return rendered


url = make_url(os.environ.get("DATABASE_URL", DEFAULT_URL))
url = url.set(drivername="postgresql+psycopg")
engine = create_engine(url, poolclass=NullPool)

with engine.connect() as connection:
    context.configure(
        connection=connection,
        # MetaData is SQLAlchemy's collection of table definitions; autogenerate
        # diffs ours and AuthTuna's against the database.
        target_metadata=[Base.metadata, AuthTunaBase.metadata],
        render_item=render_item,
    )
    with context.begin_transaction():
        context.run_migrations()

engine.dispose()
