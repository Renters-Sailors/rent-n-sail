import { CurrencyPipe, I18nPluralPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { RentalEquipmentService } from '../rental-equipment/rental-equipment.service';
import { RentalImageComponent } from '../rental-equipment/rental-image/rental-image.component';
import { Reservation } from '../reservation/reservation';
import { ReservationService } from '../reservation/reservation.service';
import { agenda } from './agenda';

/** Lists the user's booked rentals as an agenda: by day, then by start time. */
@Component({
  imports: [CurrencyPipe, I18nPluralPipe, RentalImageComponent, RouterLink],
  selector: 'app-my-reservations-page',
  styleUrl: './my-reservations-page.component.scss',
  templateUrl: './my-reservations-page.component.html',
})
export class MyReservationsPageComponent {
  private readonly equipment = inject(RentalEquipmentService);
  private readonly reservationService = inject(ReservationService);
  protected readonly reservations = this.reservationService.reservations;

  /** Ids of reservations whose cancellation is in flight. */
  protected readonly cancelling = signal<ReadonlySet<Reservation['id']>>(new Set());

  /** The reservations by day; see `agenda`. */
  protected readonly days = computed(() =>
    agenda(this.reservations.value(), this.equipment.byId()),
  );
  // `i18nPlural` messages; `#` stands for the count. See `capacityNoun` for the keys.
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
