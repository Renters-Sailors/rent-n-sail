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
  /**
   * How wide the image is shown at each viewport width, so the browser picks the smallest
   * file that's sharp enough: https://web.dev/learn/design/responsive-images#sizes
   */
  readonly sizes = input('100vw');

  private readonly equipmentService = inject(RentalEquipmentService);
  protected readonly item = computed(() => this.equipmentService.getById(this.id())());
  protected readonly isLoading = this.equipmentService.equipmentResource.isLoading;
}
