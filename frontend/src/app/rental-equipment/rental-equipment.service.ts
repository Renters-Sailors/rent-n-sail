import { resource, Service } from '@angular/core';
import { RentalEquipment } from './rental-equipment';
import { rentalEquipment } from './rental-equipment.mock';

@Service()
export class RentalEquipmentService {
  /** All rental equipment; empty until loaded. */
  readonly equipment = resource({ loader: () => this.fetchAll(), defaultValue: [] });

  /** One item, or undefined when no item has that id. */
  async getById(id: number): Promise<RentalEquipment | undefined> {
    return (await this.fetchAll()).find((item) => item.id === id);
  }

  // Mock backend call; swap for HttpClient once the API exists.
  private fetchAll(): Promise<readonly RentalEquipment[]> {
    return Promise.resolve(rentalEquipment);
  }
}
