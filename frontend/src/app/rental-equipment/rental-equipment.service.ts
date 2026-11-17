import { computed, Service, resourceFromSnapshots, ResourceSnapshot, Signal } from '@angular/core';
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
  public getById(id: number | Signal<number>) {
    const derived = computed<ResourceSnapshot<RentalEquipment | undefined>>(() => {
      const source = this.equipmentResource.snapshot();
      if (source.status === 'error') return source;
      const currentId = typeof id === 'function' ? id() : id;
      return { status: source.status, value: source.value?.find((e) => e.id === currentId) };
    });

    return resourceFromSnapshots(derived);
  }
}
