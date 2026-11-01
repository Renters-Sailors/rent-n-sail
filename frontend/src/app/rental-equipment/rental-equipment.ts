export interface RentalEquipment {
  id: number;
  name: string;
  description: string;
  capacity: { min: number; max: number };
  hourlyRate: number;
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
    hourlyRate: 18,
    slug: 'kayak',
    width: 5125,
    height: 3417,
  },
  {
    id: 2,
    name: 'Stand-up paddleboard',
    description: 'A stable board for paddling while standing or kneeling.',
    capacity: { min: 1, max: 1 },
    hourlyRate: 20,
    slug: 'stand-up-paddleboard',
    width: 4608,
    height: 2592,
  },
  {
    id: 3,
    name: 'Sailboat',
    description: 'A wind-powered boat for relaxed sailing and day trips.',
    capacity: { min: 4, max: 6 },
    hourlyRate: 85,
    slug: 'sailboat',
    width: 4700,
    height: 3133,
  },
  {
    id: 4,
    name: 'Motorboat',
    description: 'A powered boat for cruising, swimming, and water sports.',
    capacity: { min: 6, max: 8 },
    hourlyRate: 110,
    slug: 'motorboat',
    width: 6000,
    height: 4000,
  },
  {
    id: 5,
    name: 'Canoe',
    description: 'An open, narrow boat suited to calm-water trips and paddling together.',
    capacity: { min: 2, max: 2 },
    hourlyRate: 22,
    slug: 'canoe',
    width: 4288,
    height: 2848,
  },
  {
    id: 6,
    name: 'Jet ski',
    description: 'A personal watercraft for fast rides across open water.',
    capacity: { min: 1, max: 2 },
    hourlyRate: 95,
    slug: 'jet-ski',
    width: 4899,
    height: 2961,
  },
  {
    id: 7,
    name: 'Pontoon boat',
    description: 'A spacious, stable boat for groups, picnics, and leisurely cruises.',
    capacity: { min: 8, max: 12 },
    hourlyRate: 140,
    slug: 'pontoon-boat',
    width: 5184,
    height: 2920,
  },
  {
    id: 8,
    name: 'Fishing boat',
    description: 'A practical boat equipped for fishing on lakes and coastal waters.',
    capacity: { min: 4, max: 6 },
    hourlyRate: 75,
    slug: 'fishing-boat',
    width: 3000,
    height: 4000,
  },
  {
    id: 9,
    name: 'Windsurfing board',
    description: 'A board with a sail for gliding across the water using wind power.',
    capacity: { min: 1, max: 1 },
    hourlyRate: 45,
    slug: 'windsurfing-board',
    width: 4752,
    height: 3168,
  },
  {
    id: 10,
    name: 'Wakeboard',
    description: 'A board for riding behind a boat and practicing jumps and tricks.',
    capacity: { min: 1, max: 1 },
    hourlyRate: 35,
    slug: 'wakeboard',
    width: 6000,
    height: 3375,
  },
  {
    id: 11,
    name: 'Water skis',
    description: 'A pair of skis for gliding behind a boat across the water.',
    capacity: { min: 1, max: 1 },
    hourlyRate: 30,
    slug: 'water-skis',
    width: 4687,
    height: 3222,
  },
  {
    id: 12,
    name: 'Towable tube',
    description: 'An inflatable ride pulled behind a boat for fun on the water.',
    capacity: { min: 1, max: 3 },
    hourlyRate: 25,
    slug: 'towable-tube',
    width: 4180,
    height: 3062,
  },
  {
    id: 13,
    name: 'Snorkeling set',
    description: 'A mask, snorkel, and fins for exploring underwater near the shore.',
    capacity: { min: 1, max: 1 },
    hourlyRate: 15,
    slug: 'snorkeling-set',
    width: 3682,
    height: 2762,
  },
  {
    id: 14,
    name: 'Kite surfing',
    description: 'A wind-powered board sport steered by a large controllable kite.',
    capacity: { min: 1, max: 1 },
    hourlyRate: 65,
    slug: 'kite-surfing',
    width: 4681,
    height: 3121,
  },
  {
    id: 15,
    name: 'Jet boarding',
    description: 'A motorized board for riding quickly across the water.',
    capacity: { min: 1, max: 1 },
    hourlyRate: 120,
    slug: 'jet-boarding',
    width: 6000,
    height: 4000,
  },
];

export interface RentalDuration {
  label: string;
  hours: number;
  discount: number;
}

export const rentalDurations: readonly RentalDuration[] = [
  { label: '1 hour', hours: 1, discount: 0 },
  { label: '2 hours · 10% off/hr', hours: 2, discount: 0.1 },
  { label: 'Full day · 50% off/hr', hours: 8, discount: 0.5 },
];

export function rentalPrice(item: RentalEquipment, duration: RentalDuration): number {
  return item.hourlyRate * duration.hours * (1 - duration.discount);
}
