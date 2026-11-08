import { CurrencyPipe, I18nPluralPipe, KeyValuePipe } from '@angular/common';
import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, NavigationStart, Router, RouterLink } from '@angular/router';
import { capacityNoun, rentalDurations } from '../rental-equipment/rental-equipment';
import { RentalEquipmentService } from '../rental-equipment/rental-equipment.service';
import { RentalImageComponent } from '../rental-equipment/rental-image/rental-image.component';
import { FormatRangePipe } from './format-range.pipe';

@Component({
  imports: [
    CurrencyPipe,
    FormatRangePipe,
    I18nPluralPipe,
    KeyValuePipe,
    RentalImageComponent,
    RouterLink,
  ],
  selector: 'app-discover-rental-page',
  styleUrl: './discover-rental-page.component.scss',
  templateUrl: './discover-rental-page.component.html',
})
export class DiscoverRentalPageComponent {
  private readonly scroller = viewChild<ElementRef<HTMLElement>>('scroller');
  private savedScrollTop = 0;

  // The page is kept alive between routes, but the browser resets the list's
  // scroll while it is detached, so save it on leave and put it back on return.
  constructor() {
    inject(Router)
      .events.pipe(takeUntilDestroyed())
      .subscribe((event) => {
        const section = this.scroller()?.nativeElement;
        if (!section?.isConnected) return;
        if (event instanceof NavigationStart) this.savedScrollTop = section.scrollTop;
        if (event instanceof NavigationEnd) section.scrollTop = this.savedScrollTop;
      });
  }

  protected readonly capacityNoun = capacityNoun;
  protected readonly durations = rentalDurations;

  protected readonly equipment = inject(RentalEquipmentService).equipmentResource;
}
