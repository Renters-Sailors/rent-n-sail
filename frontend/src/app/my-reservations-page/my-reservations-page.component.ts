import { CurrencyPipe, DatePipe, I18nPluralPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { RentalEquipment, rentalDurations } from '../rental-equipment/rental-equipment';
import { RentalEquipmentService } from '../rental-equipment/rental-equipment.service';
import { RentalImageComponent } from '../rental-equipment/rental-image/rental-image.component';
import { Reservation } from '../reservation/reservation';
import { ReservationService } from '../reservation/reservation.service';

interface Booking {
  reservation: Reservation;
  item: RentalEquipment;
  /** Duration in hours; unused for a full day. */
  hours: number;
  /** "HH:MM" the rental ends, or null for a full day. */
  endTime: string | null;
}

interface BookingDay {
  /** "YYYY-MM-DD", for tracking and `datetime`. */
  key: string;
  date: Date;
  bookings: Booking[];
}

/** "HH:MM" plus whole hours. */
const addHours = (time: string, hours: number): string => {
  const [h, m] = time.split(':');
  return `${String(Number(h) + hours).padStart(2, '0')}:${m}`;
};

/** Lists the user's booked rentals as an agenda: by day, then by start time. */
@Component({
  imports: [CurrencyPipe, DatePipe, I18nPluralPipe, RentalImageComponent, RouterLink],
  selector: 'app-my-reservations-page',
  styleUrl: './my-reservations-page.component.scss',
  templateUrl: './my-reservations-page.component.html',
})
export class MyReservationsPageComponent {
  private readonly equipment = inject(RentalEquipmentService).equipment;
  private readonly reservationService = inject(ReservationService);
  protected readonly reservations = this.reservationService.reservations;

  /** Ids of reservations whose cancellation is in flight. */
  protected readonly cancelling = signal<ReadonlySet<Reservation['id']>>(new Set());

  /**
   * Days with bookings, soonest first. Within a day, full-day bookings come first, then by
   * start time. Reservations whose equipment is gone are left out.
   */
  protected readonly days = computed(() => {
    const days = new Map<string, BookingDay>();
    for (const reservation of this.reservations.value()) {
      const item = this.equipment.value().find(({ id }) => id === reservation.equipmentId);
      if (!item) continue;
      const { hours } = rentalDurations[reservation.durationId];
      const { startTime } = reservation;
      const key = reservation.date.toISOString().slice(0, 10);
      const day = days.get(key) ?? { key, date: reservation.date, bookings: [] };
      day.bookings.push({
        reservation,
        item,
        hours,
        endTime: startTime && addHours(startTime, hours),
      });
      days.set(key, day);
    }
    const startOf = ({ reservation }: Booking) => reservation.startTime ?? '';
    return [...days.values()]
      .sort((a, b) => a.key.localeCompare(b.key))
      .map((day) => ({
        ...day,
        bookings: day.bookings.sort((a, b) => startOf(a).localeCompare(startOf(b))),
      }));
  });
  protected readonly hoursNoun = { '=1': '1 hour', other: '# hours' };

  protected readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  protected async cancel(id: Reservation['id'], name: string): Promise<void> {
    if (!confirm(`Cancel your ${name} reservation?`)) {
      return;
    }
    this.cancelling.update((ids) => new Set(ids).add(id));
    try {
      await this.reservationService.cancel(id);
    } finally {
      this.cancelling.update((ids) => {
        const next = new Set(ids);
        next.delete(id);
        return next;
      });
    }
  }

  protected async signOut(): Promise<void> {
    await this.auth.signOut();
    await this.router.navigateByUrl('/');
  }
}
