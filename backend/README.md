# Backend

## Database migrations

The SQLAlchemy models live in [models.py](models.py). The migrations generated from them live in [`database/scripts/versions`](../database/scripts/versions).
The backend has its own Alembic environment in [migrations](migrations) (configured under `[tool.alembic]` in `pyproject.toml`) that only generates revisions.
The `database` component only applies them and never imports backend code.

### Generate a migration

1. Point `DATABASE_URL` at a database that is at the latest revision, such as a Neon development branch or a local Postgres.
   If it is not set, `postgresql://postgres:admin@localhost:5432/rent_n_sail` is used.
2. Change the models in `models.py`.
3. From `backend`, generate the revision:

   ```bash
   uv run alembic revision --autogenerate -m "short description"
   ```

4. Review the new file in `database/scripts/versions` and commit it with the model change.

Use the backend environment only for `revision` commands. Apply migrations from `database`.
Migration files must not import from `models`. For data changes, use plain SQL (see `database/scripts/versions/sql`) or `sa.table(...)`.

### Apply migrations

From `database`:

```bash
uv run alembic upgrade head
```

CI does the same for previews and production.
