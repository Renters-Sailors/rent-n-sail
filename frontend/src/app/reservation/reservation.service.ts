import { httpResource } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth/auth.service';
import { NewReservation, parseReservations, Reservation } from './reservation';

@Service()
export class ReservationService {
  private readonly api = inject(ApiService);
  private readonly auth = inject(AuthService);

  /** The user's reservations, newest first; empty until loaded and while signed out. */
  readonly reservations = httpResource(() => (this.auth.signedIn() ? 'reservations/' : undefined), {
    parse: parseReservations,
    defaultValue: [],
  });

  /** Saves a reservation and reloads the list. The date is sent as "YYYY-MM-DD". */
  async save(reservation: NewReservation): Promise<void> {
    await this.api.post<Reservation>('reservations/', reservation);
    this.reservations.reload();
  }

  /** Cancels a reservation and reloads the list. */
  async cancel(id: Reservation['id']): Promise<void> {
    await this.api.delete<void>(`reservations/${id}`);
    this.reservations.reload();
  }
}
