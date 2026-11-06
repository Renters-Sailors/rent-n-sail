import { RentalEquipment } from '../rental-equipment/rental-equipment';
import { Reservation } from '../reservation/reservation';
import { agenda } from './agenda';

const kayak: RentalEquipment = {
  id: 1,
  name: 'Kayak',
  description: '',
  capacity: { min: 1, max: 2 },
  prices: {},
  slug: 'kayak',
  width: 1,
  height: 1,
};
const equipment = new Map([[kayak.id, kayak]]);

let lastId = 0;
const reservation = (date: string, startTime: string | null, durationId = 'hour'): Reservation => ({
  id: ++lastId,
  equipmentId: kayak.id,
  durationId,
  date: Temporal.PlainDate.from(date),
  startTime,
  quantity: 1,
  total: 18,
});

describe('agenda', () => {
  it('groups reservations by day, soonest first', () => {
    const days = agenda(
      [reservation('2026-11-11', '10:00'), reservation('2026-11-10', '12:00')],
      equipment,
    );

    expect(days.map(({ key, label }) => [key, label])).toEqual([
      ['2026-11-10', 'Tuesday, November 10, 2026'],
      ['2026-11-11', 'Wednesday, November 11, 2026'],
    ]);
  });

  it('puts full days first, then sorts by start time', () => {
    const [day] = agenda(
      [
        reservation('2026-11-10', '14:00'),
        reservation('2026-11-10', null, 'full-day'),
        reservation('2026-11-10', '09:30', 'two-hours'),
      ],
      equipment,
    );

    expect(
      day.bookings.map(({ reservation, endTime }) => [reservation.startTime, endTime]),
    ).toEqual([
      [null, null],
      ['09:30', '11:30'],
      ['14:00', '15:00'],
    ]);
  });

  it('leaves out reservations whose equipment is gone', () => {
    expect(agenda([reservation('2026-11-10', '10:00')], new Map())).toEqual([]);
  });
});
