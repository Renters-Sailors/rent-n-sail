"""Keep the session cookie that a route sets or clears.

AuthTuna's session middleware appends its own `Set-Cookie` for the session token after the
route has run, because it carries the rotated random string. Sign-in, registration and
`DELETE /session` set or clear that same cookie from inside the route, so the middleware's
header lands after theirs and the browser applies it last: a fresh session is replaced by the
previous one, or a cleared cookie comes back. Dropping the duplicate keeps the route's intent
and leaves the rotation on ordinary requests alone.
"""

from authtuna import settings
from starlette.middleware.base import BaseHTTPMiddleware, RequestResponseEndpoint
from starlette.requests import Request
from starlette.responses import Response


class RouteSessionCookieMiddleware(BaseHTTPMiddleware):
    """Drops the middleware's duplicate of a session cookie the route already set or cleared."""

    async def dispatch(
        self, request: Request, call_next: RequestResponseEndpoint
    ) -> Response:
        response = await call_next(request)
        prefix = f"{settings.SESSION_TOKEN_NAME}=".encode()
        kept: list[tuple[bytes, bytes]] = []
        seen = False
        for name, value in response.raw_headers:
            if name == b"set-cookie" and value.startswith(prefix):
                if seen:
                    continue
                seen = True
            kept.append((name, value))
        response.raw_headers[:] = kept
        return response
