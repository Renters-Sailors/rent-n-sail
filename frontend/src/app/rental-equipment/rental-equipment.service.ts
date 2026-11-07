import { computed, linkedSignal, Service } from '@angular/core';
import { RentalEquipment } from './rental-equipment';
import { httpResource } from '@angular/common/http';

@Service()
export class RentalEquipmentService {
  /** All rental equipment; empty until loaded. */
  readonly equipmentResource = httpResource<readonly RentalEquipment[]>(() => 'rental_equipment');
  /** All rental equipment by id, for lists that look up many items at once; empty until loaded. */
  readonly byId = computed(
    () => new Map((this.equipmentResource.value() ?? []).map((item) => [item.id, item])),
  );

  /** One item, or undefined when no item has that id. */
  public getById(id: number) {
    return linkedSignal(() => this.equipmentResource.value()?.find((e) => e.id === id));
  }
}
