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

4. Review the new file in `database/scripts/versions` and commit it with the model change. Ruff fixes and formats it when it's written.

Use the backend environment only for `revision` commands. Apply migrations from `database`.

Deployed backends connect as the `rent_n_sail_app` role, which can only read and write rows. Every table that migrations create in `public` is granted to it automatically (set up by the first revision).

Autogenerate compares both our models and AuthTuna's, and all tables live in `public`. Upgrading AuthTuna to a version that changes its tables therefore produces a regular revision. AuthTuna takes generic table names such as `users`, `sessions`, `roles` and `permissions`; our models can't use them.

Migration files must not import from `models`. For data changes, use plain SQL (see `database/scripts/versions/sql`) or `sa.table(...)`.

### Apply migrations

From `database`:

```bash
uv run alembic upgrade head
```

CI does the same for previews and production.
