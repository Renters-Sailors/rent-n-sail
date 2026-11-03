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

export const rentalEquipment: readonly RentalEquipment[] = [
  {
    id: 1,
    name: 'Kayak',
    description: 'A lightweight boat for exploring lakes, rivers, and coastlines.',
    capacity: { min: 1, max: 2 },
    prices: { hour: 18, 'two-hours': 32.4, 'full-day': 72 },
    slug: 'kayak',
    width: 5125,
    height: 3417,
  },
  {
    id: 2,
    name: 'Stand-up paddleboard',
    description: 'A stable board for paddling while standing or kneeling.',
    capacity: { min: 1, max: 1 },
    prices: { hour: 20, 'two-hours': 36, 'full-day': 80 },
    slug: 'stand-up-paddleboard',
    width: 4608,
    height: 2592,
  },
  {
    id: 3,
    name: 'Sailboat',
    description: 'A wind-powered boat for relaxed sailing and day trips.',
    capacity: { min: 4, max: 6 },
    prices: { hour: 85, 'two-hours': 153, 'full-day': 340 },
    slug: 'sailboat',
    width: 4700,
    height: 3133,
  },
  {
    id: 4,
    name: 'Motorboat',
    description: 'A powered boat for cruising, swimming, and water sports.',
    capacity: { min: 6, max: 8 },
    prices: { hour: 110, 'two-hours': 198, 'full-day': 440 },
    slug: 'motorboat',
    width: 6000,
    height: 4000,
  },
  {
    id: 5,
    name: 'Canoe',
    description: 'An open, narrow boat suited to calm-water trips and paddling together.',
    capacity: { min: 2, max: 2 },
    prices: { hour: 22, 'two-hours': 39.6, 'full-day': 88 },
    slug: 'canoe',
    width: 4288,
    height: 2848,
  },
  {
    id: 6,
    name: 'Jet ski',
    description: 'A personal watercraft for fast rides across open water.',
    capacity: { min: 1, max: 2 },
    prices: { hour: 95, 'two-hours': 171, 'full-day': 380 },
    slug: 'jet-ski',
    width: 4899,
    height: 2961,
  },
  {
    id: 7,
    name: 'Pontoon boat',
    description: 'A spacious, stable boat for groups, picnics, and leisurely cruises.',
    capacity: { min: 8, max: 12 },
    prices: { hour: 140, 'two-hours': 252, 'full-day': 560 },
    slug: 'pontoon-boat',
    width: 5184,
    height: 2920,
  },
  {
    id: 8,
    name: 'Fishing boat',
    description: 'A practical boat equipped for fishing on lakes and coastal waters.',
    capacity: { min: 4, max: 6 },
    prices: { hour: 75, 'two-hours': 135, 'full-day': 300 },
    slug: 'fishing-boat',
    width: 3000,
    height: 4000,
  },
  {
    id: 9,
    name: 'Windsurfing board',
    description: 'A board with a sail for gliding across the water using wind power.',
    capacity: { min: 1, max: 1 },
    prices: { hour: 45, 'two-hours': 81, 'full-day': 180 },
    slug: 'windsurfing-board',
    width: 4752,
    height: 3168,
  },
  {
    id: 10,
    name: 'Wakeboard',
    description: 'A board for riding behind a boat and practicing jumps and tricks.',
    capacity: { min: 1, max: 1 },
    prices: { hour: 35, 'two-hours': 63, 'full-day': 140 },
    slug: 'wakeboard',
    width: 6000,
    height: 3375,
  },
  {
    id: 11,
    name: 'Water skis',
    description: 'A pair of skis for gliding behind a boat across the water.',
    capacity: { min: 1, max: 1 },
    prices: { hour: 30, 'two-hours': 54, 'full-day': 120 },
    slug: 'water-skis',
    width: 4687,
    height: 3222,
  },
  {
    id: 12,
    name: 'Towable tube',
    description: 'An inflatable ride pulled behind a boat for fun on the water.',
    capacity: { min: 1, max: 3 },
    prices: { hour: 25, 'two-hours': 45, 'full-day': 100 },
    slug: 'towable-tube',
    width: 4180,
    height: 3062,
  },
  {
    id: 13,
    name: 'Snorkeling set',
    description: 'A mask, snorkel, and fins for exploring underwater near the shore.',
    capacity: { min: 1, max: 1 },
    prices: { hour: 15, 'two-hours': 27, 'full-day': 60 },
    slug: 'snorkeling-set',
    width: 3682,
    height: 2762,
  },
  {
    id: 14,
    name: 'Kite surfing',
    description: 'A wind-powered board sport steered by a large controllable kite.',
    capacity: { min: 1, max: 1 },
    prices: { hour: 65, 'two-hours': 117, 'full-day': 260 },
    slug: 'kite-surfing',
    width: 4681,
    height: 3121,
  },
  {
    id: 15,
    name: 'Jet boarding',
    description: 'A motorized board for riding quickly across the water.',
    capacity: { min: 1, max: 1 },
    prices: { hour: 120, 'two-hours': 216, 'full-day': 480 },
    slug: 'jet-boarding',
    width: 6000,
    height: 4000,
  },
];

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
