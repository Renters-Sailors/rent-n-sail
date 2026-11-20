import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
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

  it('prefixes relative URLs and preserves the query string', () => {
    http.get('/boats?status=available').subscribe();

    const request = httpTestingController.expectOne('/api/boats?status=available');
    expect(request.request.withCredentials).toBe(true);
    request.flush({});
  });

  it('does not duplicate the API prefix', () => {
    http.get('/api/boats').subscribe();

    const request = httpTestingController.expectOne('/api/boats');
    expect(request.request.withCredentials).toBe(true);
    request.flush({});
  });

  it('passes requests to another origin through unchanged, with credentials', () => {
    const url = 'https://backend.example/boats?status=available';
    http.get(url).subscribe();

    const request = httpTestingController.expectOne(url);
    expect(request.request.withCredentials).toBe(true);
    request.flush({});
  });
});
