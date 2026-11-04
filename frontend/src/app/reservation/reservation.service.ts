import { resource, Service } from '@angular/core';
import { NewReservation, parseReservations, Reservation, ReservationJson } from './reservation';

/** Pretend network latency for the mock calls. */
const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

@Service()
export class ReservationService {
  // Mock backend storage, in the JSON shape the API would send; lives until the page reloads.
  private stored: readonly ReservationJson[] = [];
  private lastId = 0;

  /**
   * The user's reservations, newest first; empty until loaded. Once the API exists this becomes
   * `httpResource(() => 'reservations', { parse: parseReservations, defaultValue: [] })`.
   */
  readonly reservations = resource({ loader: () => this.fetchAll(), defaultValue: [] });

  /** Saves a reservation and reloads the list. */
  async save(reservation: NewReservation): Promise<void> {
    // Mock backend call; swap for HttpClient once the API exists.
    await delay(300);
    const saved = { ...reservation, id: ++this.lastId, date: reservation.date.toString() };
    this.stored = [saved, ...this.stored];
    this.reservations.reload();
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
    return parseReservations(this.stored);
  }
}
