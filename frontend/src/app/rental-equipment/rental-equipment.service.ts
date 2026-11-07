import { computed, linkedSignal, Service } from '@angular/core';
import { RentalEquipment } from './rental-equipment';
import { httpResource } from '@angular/common/http';

@Service()
export class RentalEquipmentService {
  /** All rental equipment; empty until loaded. */
  readonly equipment = httpResource<readonly RentalEquipment[]>(() => 'rental_equipment');
  /** All rental equipment by id, for lists that look up many items at once; empty until loaded. */
  readonly byId = computed(
    () => new Map((this.equipment.value() ?? []).map((item) => [item.id, item])),
  );

  /** One item, or undefined when no item has that id. */
  public getById(id: number) {
    return linkedSignal(() => this.equipment.value()?.find((e) => e.id === id));
  }
}
