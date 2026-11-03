/** A booked rental, as the backend would return it. */
export interface Reservation {
  id: number;
  equipmentId: number;
  durationId: string;
  /** Rental day at UTC midnight, as date inputs report it. */
  date: Date;
  /** "HH:MM", or null for a full day. */
  startTime: string | null;
  quantity: number;
  total: number;
}

/** What the booking form sends; the backend assigns the id. */
export type NewReservation = Omit<Reservation, 'id'>;
