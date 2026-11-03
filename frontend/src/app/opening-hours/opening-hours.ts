/** Hours for one weekday, as `GET opening-hours` returns them; missing days are closed. */
export interface OpeningHours {
  /** ISO weekday: 1 is Monday, 7 is Sunday. */
  weekday: number;
  /** "HH:MM", local time. */
  opens: string;
  /** "HH:MM", local time. */
  closes: string;
}

/** Weekday names by ISO weekday minus one. */
export const weekdayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;

/** ISO weekday of a date input's value, which is the picked day at UTC midnight. */
export const isoWeekday = (date: Date): number => date.getUTCDay() || 7;

/** That day's hours, or null when closed. */
export const hoursOn = (week: readonly OpeningHours[], date: Date): OpeningHours | null =>
  week.find(({ weekday }) => weekday === isoWeekday(date)) ?? null;

/** From the earliest opening to the latest closing of the week; null when never open. */
export const widestHours = (week: readonly OpeningHours[]): OpeningHours | null =>
  week.reduce<OpeningHours | null>(
    (widest, day) =>
      widest && {
        ...widest,
        opens: day.opens < widest.opens ? day.opens : widest.opens,
        closes: day.closes > widest.closes ? day.closes : widest.closes,
      },
    week[0] ?? null,
  );
