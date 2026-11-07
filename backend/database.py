import os
from collections.abc import AsyncGenerator
from typing import Annotated

from fastapi import Depends, HTTPException
from sqlalchemy.engine import make_url
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.pool import NullPool


async def get_async_session() -> AsyncGenerator[AsyncSession]:
    raw_url = os.environ.get("DATABASE_URL")
    if not raw_url:
        raise HTTPException(status_code=503, detail="Database is not configured")
    url = make_url(raw_url).set(drivername="postgresql+psycopg")
    engine = create_async_engine(url, poolclass=NullPool, pool_pre_ping=True)
    try:
        async with AsyncSession(engine) as session:
            yield session
    finally:
        await engine.dispose()


AsyncDbSession = Annotated[AsyncSession, Depends(get_async_session)]
