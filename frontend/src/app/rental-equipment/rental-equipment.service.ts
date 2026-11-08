import {
  computed,
  linkedSignal,
  Service,
  resourceFromSnapshots,
  ResourceSnapshot,
} from '@angular/core';
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
    const derived = linkedSignal<
      ResourceSnapshot<readonly RentalEquipment[] | undefined>,
      ResourceSnapshot<RentalEquipment | undefined>
    >({
      source: this.equipmentResource.snapshot,
      computation: (source, previous) => {
        if (source.status === 'loading' && previous && previous.value.status !== 'error') {
          return { status: 'loading' as const, value: previous.value.value };
        }

        if (source.status === 'error') {
          return source;
        }

        return { status: 'local' as const, value: source.value?.find((e) => e.id === id) };
      },
    });

    return resourceFromSnapshots(derived);
  }
}
