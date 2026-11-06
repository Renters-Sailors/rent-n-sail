/** Hours for one weekday, as `GET opening-hours` returns them; missing days are closed. */
export interface OpeningHours {
  /** ISO weekday: 1 is Monday, 7 is Sunday. */
  weekday: number;
  /** "HH:MM", local time. */
  opens: string;
  /** "HH:MM", local time. */
  closes: string;
}

/**
 * English weekday name for an ISO weekday (1 is Monday), to match the rest of the UI and
 * so the server and the browser render the same text. 1 January 2024 was a Monday.
 */
export const weekdayName = (weekday: number): string =>
  Temporal.PlainDate.from('2024-01-01')
    .add({ days: weekday - 1 })
    .toLocaleString('en', { weekday: 'long' });

/** ISO weekdays, Monday first. */
export const isoWeekdays: readonly number[] = [1, 2, 3, 4, 5, 6, 7];

/** ISO weekday of a date input's value, which is the picked day at UTC midnight. */
export const isoWeekday = (date: Date): number =>
  Temporal.Instant.fromEpochMilliseconds(date.getTime()).toZonedDateTimeISO('UTC').dayOfWeek;

/** That day's hours, or null when closed. */
export const hoursOn = (week: readonly OpeningHours[], date: Date): OpeningHours | null =>
  week.find(({ weekday }) => weekday === isoWeekday(date)) ?? null;

const earlier = (a: string, b: string): string => (Temporal.PlainTime.compare(a, b) < 0 ? a : b);
const later = (a: string, b: string): string => (Temporal.PlainTime.compare(a, b) > 0 ? a : b);

/** From the earliest opening to the latest closing of the week; null when never open. */
export const widestHours = (week: readonly OpeningHours[]): OpeningHours | null =>
  week.reduce<OpeningHours | null>(
    (widest, day) =>
      widest && {
        ...widest,
        opens: earlier(day.opens, widest.opens),
        closes: later(day.closes, widest.closes),
      },
    week[0] ?? null,
  );
