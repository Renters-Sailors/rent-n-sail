"""Alembic environment for generating revisions from the backend models.

Revisions are written to database/scripts/versions, where the database
component applies them. Only revision commands are meant to run from here.
"""

import os

# alembic is a dev dependency: it only generates revisions locally.
# noinspection PyPackageRequirements
from alembic import context
from sqlalchemy import create_engine
from sqlalchemy.engine import make_url
from sqlalchemy.pool import NullPool

from models import Base

DEFAULT_URL = "postgresql://postgres:admin@localhost:5432/rent_n_sail"

url = make_url(os.environ.get("DATABASE_URL", DEFAULT_URL))
url = url.set(drivername="postgresql+psycopg")
engine = create_engine(url, poolclass=NullPool)

with engine.connect() as connection:
    # The database's search_path includes the authtuna schema, and SQLAlchemy
    # reflects every visible table as if it were in public. Hide AuthTuna's
    # tables so autogenerate doesn't drop them.
    connection.exec_driver_sql("SET search_path TO public")
    connection.commit()
    context.configure(connection=connection, target_metadata=Base.metadata)
    with context.begin_transaction():
        context.run_migrations()

engine.dispose()
