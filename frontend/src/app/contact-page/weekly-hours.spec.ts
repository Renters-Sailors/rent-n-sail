import { OpeningHours } from '../opening-hours/opening-hours';
import { weeklyHours } from './weekly-hours';

const open = (weekday: number, opens = '08:00', closes = '20:00'): OpeningHours => ({
  weekday,
  opens,
  closes,
});

describe('weeklyHours', () => {
  it('joins consecutive days with the same hours into one row', () => {
    const week = [1, 2, 3, 4, 5].map((weekday) => open(weekday)).concat(open(6, '10:00', '16:00'));

    expect(weeklyHours(week)).toEqual([
      { days: 'Monday – Friday', hours: '08:00 – 20:00' },
      { days: 'Saturday', hours: '10:00 – 16:00' },
      { days: 'Sunday', hours: 'Closed' },
    ]);
  });

  it('keeps days with the same hours apart when a different day is between them', () => {
    expect(weeklyHours([open(1), open(3)]).slice(0, 4)).toEqual([
      { days: 'Monday', hours: '08:00 – 20:00' },
      { days: 'Tuesday', hours: 'Closed' },
      { days: 'Wednesday', hours: '08:00 – 20:00' },
      { days: 'Thursday – Sunday', hours: 'Closed' },
    ]);
  });

  it('shows the whole week closed when there are no hours', () => {
    expect(weeklyHours([])).toEqual([{ days: 'Monday – Sunday', hours: 'Closed' }]);
  });
});
