import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  styleUrl: './contact-page.component.scss',
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent {
  protected readonly business = {
    name: "Rent'n'Sail",
    street: '12 Harbour Promenade',
    postalCode: '81-350',
    city: 'Gdynia',
    country: 'Poland',
    phone: '+48 58 123 45 67',
    email: 'hello@rent-n-sail.example',
  };

  protected readonly openingHours = [
    { days: 'Monday – Friday', hours: '08:00 – 20:00' },
    { days: 'Saturday', hours: '07:00 – 21:00' },
    { days: 'Sunday', hours: '09:00 – 18:00' },
  ];

  protected readonly people = [
    {
      name: 'Anna Kowalska',
      role: 'Bookings and group trips',
      phone: '+48 600 111 222',
      email: 'anna@rent-n-sail.example',
    },
    {
      name: 'Piotr Nowak',
      role: 'Equipment and safety briefings',
      phone: '+48 600 333 444',
      email: 'piotr@rent-n-sail.example',
    },
  ];

  protected telHref(phone: string): string {
    return `tel:${phone.replaceAll(' ', '')}`;
  }
}
