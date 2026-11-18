import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DEFAULT_BACKEND_URL } from '../local-origins';
import { backendApiInterceptor } from './backend-api-url';

describe('backendApiInterceptor', () => {
  let http: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([backendApiInterceptor])),
        provideHttpClientTesting(),
      ],
    });
    http = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('points relative URLs at the backend origin and preserves the query string', () => {
    http.get('/boats?status=available').subscribe();

    const request = httpTestingController.expectOne(`${DEFAULT_BACKEND_URL}boats?status=available`);
    expect(request.request.withCredentials).toBe(true);
    request.flush({});
  });

  it('keeps a relative /api/ path when pointing at the backend origin', () => {
    http.get('/api/boats').subscribe();

    httpTestingController.expectOne(`${DEFAULT_BACKEND_URL}api/boats`).flush({});
  });

  it('sends requests to another origin through unchanged, with credentials', () => {
    const url = 'https://backend.example/boats?status=available';
    http.get(url).subscribe();

    const request = httpTestingController.expectOne(url);
    expect(request.request.withCredentials).toBe(true);
    request.flush({});
  });
});
