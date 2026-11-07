"""Alembic environment for generating revisions from the backend models.

Revisions are written to database/scripts/versions, where the database
component applies them. Only revision commands are meant to run from here.
"""

import os
from collections.abc import Mapping

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

# MetaData is SQLAlchemy's collection of table definitions; autogenerate diffs
# it against the database. AuthTuna's models have no schema, but its tables
# live in the authtuna schema, so copy them into a MetaData of their own there.
authtuna_metadata = MetaData()
for table in AuthTunaBase.metadata.sorted_tables:
    table.to_metadata(authtuna_metadata, schema=AUTHTUNA_SCHEMA)


def include_name(
    name: str | None, type_: str, _parent_names: Mapping[str, str | None]
) -> bool:
    """Tell autogenerate which reflected database names to compare.

    Alembic calls it for every schema, table, column, index and so on it reads
    from the database; returning False skips that name. Only schemas are
    filtered: public (the default schema, passed as None) and authtuna.
    """
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
