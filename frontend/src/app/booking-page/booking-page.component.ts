import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { rentalDurations, rentalPrice } from '../rental-equipment/rental-equipment';
import { RentalEquipmentService } from '../rental-equipment/rental-equipment.service';
import { RentalImageComponent } from '../rental-equipment/rental-image/rental-image.component';

/** Mock booking form for one rental item. Nothing is sent anywhere. */
@Component({
  imports: [CurrencyPipe, RentalImageComponent, RouterLink],
  selector: 'app-booking-page',
  styleUrl: './booking-page.component.scss',
  templateUrl: './booking-page.component.html',
})
export class BookingPageComponent {
  /** Route parameter `:id`, bound by `withComponentInputBinding`. */
  readonly id = input.required<string>();

  protected readonly equipment = inject(RentalEquipmentService).equipment;
  protected readonly item = computed(() =>
    this.equipment.value().find((item) => item.id === Number(this.id())),
  );
  protected readonly durations = rentalDurations;
  protected readonly duration = signal(rentalDurations[0]);
  protected readonly booked = signal(false);
  protected readonly today = new Date().toISOString().slice(0, 10);
  protected readonly price = rentalPrice;
}
