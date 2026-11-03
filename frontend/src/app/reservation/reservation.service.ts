import { resource, Service } from '@angular/core';
import { NewReservation, Reservation } from './reservation';

/** Pretend network latency for the mock calls. */
const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

@Service()
export class ReservationService {
  // Mock backend storage; lives only until the page reloads.
  private stored: readonly Reservation[] = [];
  private lastId = 0;

  /** The user's reservations, newest first; empty until loaded. */
  readonly reservations = resource({ loader: () => this.fetchAll(), defaultValue: [] });

  /** Saves a reservation and reloads the list. */
  async save(reservation: NewReservation): Promise<Reservation> {
    // Mock backend call; swap for HttpClient once the API exists.
    await delay(300);
    const saved: Reservation = { ...reservation, id: ++this.lastId };
    this.stored = [saved, ...this.stored];
    this.reservations.reload();
    return saved;
  }

  /** Cancels a reservation and reloads the list. */
  async cancel(id: Reservation['id']): Promise<void> {
    // Mock backend call; swap for HttpClient once the API exists.
    await delay(300);
    this.stored = this.stored.filter((reservation) => reservation.id !== id);
    this.reservations.reload();
  }

  // Mock backend call; swap for HttpClient once the API exists.
  private async fetchAll(): Promise<readonly Reservation[]> {
    await delay(150);
    return this.stored;
  }
}
