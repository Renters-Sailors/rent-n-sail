import { RentalEquipment, rentalDurations } from '../rental-equipment/rental-equipment';
import { Reservation } from '../reservation/reservation';

export interface Booking {
  reservation: Reservation;
  item: RentalEquipment;
  /** Duration in hours; unused for a full day. */
  hours: number;
  /** "HH:MM" the rental ends, or null for a full day. */
  endTime: string | null;
}

export interface BookingDay {
  /** "YYYY-MM-DD", for tracking and `datetime`. */
  key: string;
  /** e.g. "Tuesday, November 10, 2026". English, so the server and the browser agree. */
  label: string;
  bookings: Booking[];
}

const soonestFirst = (a: Reservation, b: Reservation): number =>
  Temporal.PlainDate.compare(a.date, b.date) ||
  // Full days have no start time, so they come first.
  (a.startTime ?? '').localeCompare(b.startTime ?? '');

const bookingOf = (reservation: Reservation, item: RentalEquipment): Booking => {
  const { hours } = rentalDurations[reservation.durationId];
  const { startTime } = reservation;
  const endTime =
    startTime &&
    Temporal.PlainTime.from(startTime).add({ hours }).toString({ smallestUnit: 'minute' });
  return { reservation, item, hours, endTime };
};

/**
 * Reservations as an agenda: days soonest first, and within a day full-day bookings first,
 * then by start time. Reservations whose equipment is gone are left out.
 */
export const agenda = (
  reservations: readonly Reservation[],
  equipment: ReadonlyMap<RentalEquipment['id'], RentalEquipment>,
): BookingDay[] => {
  // Sorted before grouping, so both the days and each day's bookings come out in order.
  const days = new Map<string, BookingDay>();
  for (const reservation of reservations.toSorted(soonestFirst)) {
    const item = equipment.get(reservation.equipmentId);
    if (!item) continue;
    const key = reservation.date.toString();
    const label = reservation.date.toLocaleString('en-US', { dateStyle: 'full' });
    const day = days.get(key) ?? { key, label, bookings: [] };
    day.bookings.push(bookingOf(reservation, item));
    days.set(key, day);
  }
  return [...days.values()];
};
