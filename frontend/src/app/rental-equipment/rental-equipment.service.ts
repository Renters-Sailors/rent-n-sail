import { computed, resource, Service } from '@angular/core';
import { RentalEquipment } from './rental-equipment';
import { rentalEquipment } from './rental-equipment.mock';

@Service()
export class RentalEquipmentService {
  /** All rental equipment; empty until loaded. */
  readonly equipment = resource({ loader: () => this.fetchAll(), defaultValue: [] });
  /** All rental equipment by id, for lists that look up many items at once; empty until loaded. */
  readonly byId = computed(() => new Map(this.equipment.value().map((item) => [item.id, item])));

  /** One item, or undefined when no item has that id. */
  async getById(id: number): Promise<RentalEquipment | undefined> {
    return (await this.fetchAll()).find((item) => item.id === id);
  }

  // Mock backend call; swap for HttpClient once the API exists.
  private fetchAll(): Promise<readonly RentalEquipment[]> {
    return Promise.resolve(rentalEquipment);
  }
}
