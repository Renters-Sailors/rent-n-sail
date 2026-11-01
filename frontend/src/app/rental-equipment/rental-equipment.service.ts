import { resource, Service } from '@angular/core';
import { RentalEquipment, rentalEquipment } from './rental-equipment';

@Service()
export class RentalEquipmentService {
  /** All rental equipment; empty until loaded. */
  readonly equipment = resource({ loader: () => this.fetchAll(), defaultValue: [] });

  /** For places that can't read a signal, such as route redirects and titles. */
  async find(id: number): Promise<RentalEquipment | undefined> {
    return (await this.fetchAll()).find((item) => item.id === id);
  }

  // Mock backend call; swap for HttpClient once the API exists.
  private fetchAll(): Promise<readonly RentalEquipment[]> {
    return Promise.resolve(rentalEquipment);
  }
}
