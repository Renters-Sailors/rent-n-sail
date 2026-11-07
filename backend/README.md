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

Deployed backends connect as the `rent_n_sail_app` role, which can only read and write rows. Tables that migrations create in `public` are granted to it automatically. For tables in other schemas, add the grants in the migration.

AuthTuna's tables live in the `authtuna` schema, which the database's `search_path` includes after `public`. Don't create tables in `public` with the same names as AuthTuna's (such as `users`, `roles` or `permissions`), or AuthTuna will read those instead.
Migration files must not import from `models`. For data changes, use plain SQL (see `database/scripts/versions/sql`) or `sa.table(...)`.

### Apply migrations

From `database`:

```bash
uv run alembic upgrade head
```

CI does the same for previews and production.
