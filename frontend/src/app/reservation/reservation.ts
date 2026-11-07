/** A booked rental. */
export interface Reservation {
  id: number;
  equipmentId: number;
  durationId: string;
  /** The rental day. */
  date: Temporal.PlainDate;
  /** "HH:MM", or null for a full day. */
  startTime: string | null;
  quantity: number;
  total: number;
}

/** What the booking form sends; the backend assigns the id. */
export type NewReservation = Omit<Reservation, 'id'>;

/** A reservation as the backend sends it, with the date as "YYYY-MM-DD". */
export type ReservationJson = Omit<Reservation, 'date'> & { date: string };

/** `httpResource`'s `parse` step: turns the backend's reservations into ours. */
export const parseReservations = (json: unknown): Reservation[] =>
  (json as ReservationJson[]).map((reservation) => ({
    ...reservation,
    date: Temporal.PlainDate.from(reservation.date),
  }));
