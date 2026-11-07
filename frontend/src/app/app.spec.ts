import { IMAGE_CONFIG, IMAGE_LOADER } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { rentalImageLoader } from './discover-rental-page/discover-rental-image-loader';
import { routes } from './app.routes';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { RentalEquipment } from './rental-equipment/rental-equipment';

describe('App', () => {
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter(routes),
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: IMAGE_LOADER, useValue: rentalImageLoader },
        { provide: IMAGE_CONFIG, useValue: { breakpoints: [640, 960, 1440] } },
      ],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Ensure no unexpected requests are left open
    httpMock.verify();
  });

  it('should render the discover page at the default route', async () => {
    const mockData: RentalEquipment[] = [
      {
        id: 1,
        name: 'Kayak',
        description: 'description',
        capacity: {
          min: 1,
          max: 2,
        },
        prices: {},
        slug: 'kayak',
        width: 0,
        height: 0,
      },
    ];
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    await TestBed.inject(Router).navigateByUrl('/');
    fixture.detectChanges();

    const request = httpMock.expectOne('rental_equipment');
    expect(request.request.method).toBe('GET');
    request.flush(mockData);

    // The equipment list loads asynchronously.
    await fixture.whenStable();
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('app-discover-rental-page')).not.toBeNull();
    // Scoped, since the app shell also holds the sign-in dialog's heading.
    expect(element.querySelector('app-discover-rental-page h2')?.textContent).toContain('Kayak');
  });
});
