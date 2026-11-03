import { Component, computed, inject } from '@angular/core';
import { weekdayNames } from '../opening-hours/opening-hours';
import { OpeningHoursService } from '../opening-hours/opening-hours.service';

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

  private readonly week = inject(OpeningHoursService).week;
  /** Consecutive days with the same hours share a row, e.g. "Monday – Friday". */
  protected readonly openingHours = computed(() => {
    const week = this.week.value();
    if (!week) return [];
    const rows: { first: string; last: string; hours: string }[] = [];
    weekdayNames.forEach((name, index) => {
      const day = week.find(({ weekday }) => weekday === index + 1);
      const hours = day ? `${day.opens} – ${day.closes}` : 'Closed';
      const previous = rows.at(-1);
      if (previous?.hours === hours) previous.last = name;
      else rows.push({ first: name, last: name, hours });
    });
    return rows.map(({ first, last, hours }) => ({
      days: first === last ? first : `${first} – ${last}`,
      hours,
    }));
  });

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
