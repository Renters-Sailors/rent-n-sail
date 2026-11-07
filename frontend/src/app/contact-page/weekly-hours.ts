import { isoWeekdays, OpeningHours, weekdayName } from '../opening-hours/opening-hours';

export interface WeeklyHoursRow {
  /** One day, or a range such as "Monday – Friday". */
  days: string;
  /** "HH:MM – HH:MM", or "Closed". */
  hours: string;
}

/** The week from Monday, with consecutive days that have the same hours sharing a row. */
export const weeklyHours = (week: readonly OpeningHours[]): WeeklyHoursRow[] => {
  const rows: { first: string; last: string; hours: string }[] = [];
  for (const weekday of isoWeekdays) {
    const name = weekdayName(weekday);
    const day = week.find((hours) => hours.weekday === weekday);
    const hours = day ? `${day.opens} – ${day.closes}` : 'Closed';
    const previous = rows.at(-1);
    if (previous?.hours === hours) previous.last = name;
    else rows.push({ first: name, last: name, hours });
  }
  return rows.map(({ first, last, hours }) => ({
    days: first === last ? first : `${first} – ${last}`,
    hours,
  }));
};
