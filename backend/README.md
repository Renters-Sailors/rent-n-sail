# Backend

## Database migrations

The SQLAlchemy models live in [models.py](models.py). The migrations generated from them live in [`database/scripts/versions`](../database/scripts/versions).
The backend generates migrations, and the `database` component only applies them, so database deploys never import backend code.

### Generate a migration

1. Point `DATABASE_URL` at a database that is at the latest revision, such as a Neon development branch or a local Postgres.
   If it is not set, the default URL in [`database/alembic.ini`](../database/alembic.ini) is used.
2. Change the models in `models.py`.
3. From `backend`, generate the revision:

   ```bash
   uv run alembic -c ../database/alembic.ini -c ../database/pyproject.toml revision --autogenerate -m "short description"
   ```

4. Review the new file in `database/scripts/versions` and commit it with the model change.

Run the command from `backend`, because that is where `models` can be imported.
Migration files must not import from `models`. For data changes, use plain SQL (see `database/scripts/versions/sql`) or `sa.table(...)`.

### Apply migrations

From `database`:

```bash
uv run alembic upgrade head
```

CI does the same for previews and production.
