import asyncio
import os
from logging.config import fileConfig

from alembic import context
from authtuna.core.config import init_settings
from sqlalchemy import pool
from sqlalchemy.engine import Connection, make_url
from sqlalchemy.ext.asyncio import async_engine_from_config

# this is the Alembic Config object, which provides
# access to the values within the .ini file in use.
config = context.config
database_url = os.getenv("DATABASE_URL")
if database_url:
    url = make_url(database_url.replace("postgres://", "postgresql://", 1))
    url = url.set(drivername="postgresql+asyncpg")
    if "sslmode" in url.query:
        url = url.update_query_dict(
            {"ssl": url.query["sslmode"]}
        ).difference_update_query(["sslmode"])
    url = url.difference_update_query(["channel_binding"])
    config.set_main_option(
        "sqlalchemy.url", url.render_as_string(hide_password=False).replace("%", "%%")
    )

# Interpret the config file for Python logging.
# This line sets up loggers basically.
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Revisions use AuthTuna's column types, and importing them requires AuthTuna's
# settings. Migrations never use its API or encryption, so those values are
# placeholders. Pointing it at the migrated database keeps it from setting up
# SQLite, its default, whose PRAGMA hook would run on every connection.
init_settings(
    API_BASE_URL="https://placeholder-for-migrations-only.invalid",
    DEFAULT_DATABASE_URI=config.get_main_option("sqlalchemy.url"),
    # Base64 of "placeholder-for-migrations-only!" (a Fernet key is 32 bytes).
    FERNET_KEYS=["cGxhY2Vob2xkZXItZm9yLW1pZ3JhdGlvbnMtb25seSE="],
)

# Revisions are generated from the backend (see backend/README.md).
# This project only applies them, so it needs no model metadata.
target_metadata = None

# other values from the config, defined by the needs of env.py,
# can be acquired:
# my_important_option = config.get_main_option("my_important_option")
# ... etc.


def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode.

    This configures the context with just a URL
    and not an Engine, though an Engine is acceptable
    here as well.  By skipping the Engine creation
    we don't even need a DBAPI to be available.

    Calls to context.execute() here emit the given string to the
    script output.

    """
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


def do_run_migrations(connection: Connection) -> None:
    context.configure(connection=connection, target_metadata=target_metadata)

    with context.begin_transaction():
        context.run_migrations()


async def run_async_migrations() -> None:
    """In this scenario we need to create an Engine
    and associate a connection with the context.

    """

    connectable = async_engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    async with connectable.connect() as connection:
        await connection.run_sync(do_run_migrations)

    await connectable.dispose()


def run_migrations_online() -> None:
    """Run migrations in 'online' mode."""

    asyncio.run(run_async_migrations())


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
