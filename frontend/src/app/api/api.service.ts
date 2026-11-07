import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { firstValueFrom } from 'rxjs';

/**
 * Backend calls as promises. Transient failures of safe requests are retried by
 * `transientRetryInterceptor`, which also covers `httpResource`.
 */
@Service()
export class ApiService {
  private readonly http = inject(HttpClient);

  get<T>(url: string, options?: { transferCache?: boolean }): Promise<T> {
    return firstValueFrom(this.http.get<T>(url, options));
  }

  post<T>(url: string, body: unknown): Promise<T> {
    return firstValueFrom(this.http.post<T>(url, body));
  }

  delete<T>(url: string): Promise<T> {
    return firstValueFrom(this.http.delete<T>(url));
  }
}
