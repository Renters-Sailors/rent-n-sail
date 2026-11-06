import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { retry, throwError, timer } from 'rxjs';

/** Methods that are safe to send twice. POSTs aren't: a passkey challenge, say, works only once. */
const idempotentMethods = new Set(['GET', 'HEAD', 'OPTIONS', 'PUT', 'DELETE']);
/** No connection, timeout, rate limit, or a proxy that couldn't reach the backend. */
const transientStatuses = new Set([0, 408, 429, 502, 503, 504]);

const isTransient = (error: unknown): boolean =>
  error instanceof HttpErrorResponse && transientStatuses.has(error.status);

/** Retries transient failures of idempotent requests twice, after 0.5 s and then 1 s. */
export const transientRetryInterceptor: HttpInterceptorFn = (request, next) =>
  idempotentMethods.has(request.method)
    ? next(request).pipe(
        retry({
          count: 2,
          delay: (error, attempt) =>
            isTransient(error) ? timer(500 * 2 ** (attempt - 1)) : throwError(() => error),
        }),
      )
    : next(request);
