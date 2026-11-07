"""Alembic environment for generating revisions from the backend models.

Revisions are written to database/scripts/versions, where the database
component applies them. Only revision commands are meant to run from here.
"""

import os

# alembic is a dev dependency: it only generates revisions locally.
# noinspection PyPackageRequirements
from alembic import context
from sqlalchemy import MetaData, create_engine
from sqlalchemy.engine import make_url
from sqlalchemy.pool import NullPool

import main  # noqa: F401  # configures AuthTuna before its models are imported

# isort: split
from authtuna.core.database import Base as AuthTunaBase

from models import Base

DEFAULT_URL = "postgresql://postgres:admin@localhost:5432/rent_n_sail"
AUTHTUNA_SCHEMA = "authtuna"

# AuthTuna's tables have no schema; ours live in the authtuna schema. Copy them
# there, keeping AuthTuna's index names (by default they'd gain the schema).
authtuna_metadata = MetaData(
    naming_convention={"ix": "ix_%(table_name)s_%(column_0_name)s"}
)
for table in AuthTunaBase.metadata.sorted_tables:
    table.to_metadata(authtuna_metadata, schema=AUTHTUNA_SCHEMA)


def include_name(name: str | None, type_: str, _parent_names: object) -> bool:
    """Compare only public (the default schema, None) and authtuna."""
    return type_ != "schema" or name in (None, AUTHTUNA_SCHEMA)


url = make_url(os.environ.get("DATABASE_URL", DEFAULT_URL))
url = url.set(drivername="postgresql+psycopg")
engine = create_engine(url, poolclass=NullPool)

with engine.connect() as connection:
    # The database's search_path includes authtuna, and SQLAlchemy reflects
    # every visible table as part of public. Narrow it so AuthTuna's tables are
    # only seen in their own schema.
    connection.exec_driver_sql("SET search_path TO public")
    connection.commit()
    context.configure(
        connection=connection,
        target_metadata=[Base.metadata, authtuna_metadata],
        include_schemas=True,
        include_name=include_name,
    )
    with context.begin_transaction():
        context.run_migrations()

engine.dispose()
