export interface RentalEquipment {
  id: number;
  name: string;
  description: string;
  capacity: { min: number; max: number };
  /** Whole price for one unit, keyed by rental duration id. */
  prices: Readonly<Record<string, number>>;
  slug: string;
  width: number;
  height: number;
}

export interface RentalDuration {
  label: string;
  hours: number;
}

/** Rental durations by id, in display order. */
export const rentalDurations: Readonly<Record<string, RentalDuration>> = {
  hour: { label: '1 hour', hours: 1 },
  'two-hours': { label: '2 hours · 10% off/hr', hours: 2 },
  'full-day': { label: 'Full day · 50% off/hr', hours: 8 },
};

/**
 * `i18nPlural` messages for the capacity's upper bound. Keys are ICU plural selectors: `=1` matches
 * exactly 1, and `other` is the English plural category for every other count. Other locales
 * have more categories, such as `few` and `many`, and a `#` in a message stands for the count.
 */
export const capacityNoun = { '=1': 'person', other: 'people' };
