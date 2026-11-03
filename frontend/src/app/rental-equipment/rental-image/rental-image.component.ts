import { NgOptimizedImage } from '@angular/common';
import { booleanAttribute, Component, computed, inject, input } from '@angular/core';
import { RentalEquipmentService } from '../rental-equipment.service';

/** Photo of one rental item, filling its positioned parent. */
@Component({
  imports: [NgOptimizedImage],
  selector: 'app-rental-image',
  styleUrl: './rental-image.component.scss',
  templateUrl: './rental-image.component.html',
})
export class RentalImageComponent {
  readonly id = input.required<number>();
  readonly priority = input(false, { transform: booleanAttribute });
  readonly sizes = input('100vw');

  private readonly equipment = inject(RentalEquipmentService).equipment;
  protected readonly item = computed(() =>
    this.equipment.value().find((item) => item.id === this.id()),
  );
}
