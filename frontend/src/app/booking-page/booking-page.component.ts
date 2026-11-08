import { CurrencyPipe, I18nPluralPipe, KeyValuePipe } from '@angular/common';
import { Component, computed, inject, input, linkedSignal, numberAttribute } from '@angular/core';
import {
  disabled,
  form,
  FormField,
  FormRoot,
  max,
  min,
  minDate,
  required,
  validate,
} from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { FormatRangePipe } from '../discover-rental-page/format-range.pipe';
import { FieldErrorPipe } from '../forms/field-error.pipe';
import {
  capacityNoun,
  RentalDuration,
  rentalDurations,
} from '../rental-equipment/rental-equipment';
import { RentalEquipmentService } from '../rental-equipment/rental-equipment.service';
import { AuthService } from '../auth/auth.service';
import { RentalImageComponent } from '../rental-equipment/rental-image/rental-image.component';
import { ReservationService } from '../reservation/reservation.service';
import {
  hoursOn,
  isoWeekday,
  OpeningHours,
  weekdayName,
  widestHours,
} from '../opening-hours/opening-hours';
import { OpeningHoursService } from '../opening-hours/opening-hours.service';

interface BookingModel {
  durationId: string;
  date: Date | null;
  startTime: string;
  quantity: number;
}

/** Latest start time ("HH:MM") so the rental is back by closing time. */
const latestStartFor = (closes: string, duration: RentalDuration): string =>
  Temporal.PlainTime.from(closes)
    .subtract({ hours: duration.hours })
    .toString({ smallestUnit: 'minute' });

/**
 * Today's local date at UTC midnight. It stays a `Date`, because that's how date inputs report
 * their value and what `minDate` compares against.
 */
const today = (): Date =>
  new Date(Temporal.Now.plainDateISO().toZonedDateTime('UTC').epochMilliseconds);

const initialBooking = (): BookingModel => ({
  durationId: 'hour',
  date: today(),
  startTime: '10:00',
  quantity: 1,
});

/** Booking form for one rental item. Saving opens the user's reservations. */
@Component({
  imports: [
    CurrencyPipe,
    FieldErrorPipe,
    FormatRangePipe,
    FormField,
    FormRoot,
    I18nPluralPipe,
    KeyValuePipe,
    RentalImageComponent,
    RouterLink,
  ],
  selector: 'app-booking-page',
  styleUrl: './booking-page.component.scss',
  templateUrl: './booking-page.component.html',
})
export class BookingPageComponent {
  /** Route parameter `:id`, bound by `withComponentInputBinding`. */
  readonly id = input.required({ transform: numberAttribute });

  private readonly equipmentService = inject(RentalEquipmentService);
  protected readonly item = computed(() => this.equipmentService.getById(this.id()).value());
  protected readonly isLoading = this.equipmentService.equipmentResource.isLoading;
  private readonly auth = inject(AuthService);
  private readonly reservations = inject(ReservationService);
  private readonly router = inject(Router);
  private readonly week = inject(OpeningHoursService).week;

  /**
   * Hours a booking can start in: the picked day's, or the whole week's until a date is
   * picked. Null when closed, undefined until the hours load.
   */
  private hoursOn(date: Date | null): OpeningHours | null | undefined {
    const week = this.week.value();
    if (!week) return undefined;
    return date ? hoursOn(week, date) : widestHours(week);
  }

  /** Resets to the initial booking whenever the item changes. */
  private readonly booking = linkedSignal({ source: this.item, computation: initialBooking });
  protected readonly bookingForm = form(
    this.booking,
    (path) => {
      required(path.date);
      minDate(path.date, today(), { message: 'Pick a date from today on.' });
      validate(path.date, ({ value }) => {
        const date = value();
        return date && this.hoursOn(date) === null
          ? { kind: 'closed', message: `We're closed on ${weekdayName(isoWeekday(date))}s.` }
          : undefined;
      });
      // A full day has no start time to pick.
      disabled(path.startTime, { when: ({ valueOf }) => valueOf(path.durationId) === 'full-day' });
      required(path.startTime);
      // "HH:MM" strings compare correctly as text.
      // A closed day has no hours to check against; the date shows that error.
      validate(path.startTime, ({ value, valueOf }) => {
        const hours = this.hoursOn(valueOf(path.date));
        if (!hours) return undefined;
        const latest = latestStartFor(hours.closes, rentalDurations[valueOf(path.durationId)]);
        const time = value();
        return time && (time < hours.opens || time > latest)
          ? { kind: 'openingHours', message: `Pick a start time from ${hours.opens} to ${latest}.` }
          : undefined;
      });
      min(path.quantity, 1);
      max(path.quantity, 10);
    },
    { submission: { action: () => this.reserve() } },
  );

  protected readonly durations = rentalDurations;
  /** Price of the whole booking: the chosen duration's price times the quantity. */
  protected readonly total = computed(() => {
    const { durationId, quantity } = this.booking();
    return (this.item()?.prices[durationId] ?? 0) * quantity;
  });
  /** Hours for the start time picker's limits. */
  protected readonly dayHours = computed(() => this.hoursOn(this.booking().date));
  protected readonly latestStart = computed(() => {
    const hours = this.dayHours();
    return hours ? latestStartFor(hours.closes, rentalDurations[this.booking().durationId]) : null;
  });
  protected readonly capacityNoun = capacityNoun;

  private async reserve(): Promise<void> {
    const { durationId, date, startTime, quantity } = this.booking();
    if (!date || !(await this.auth.ensureSignedIn('Sign in to book'))) return;
    await this.reservations.save({
      equipmentId: this.id(),
      durationId,
      // Date inputs report the picked day at UTC midnight.
      date: Temporal.Instant.fromEpochMilliseconds(date.getTime())
        .toZonedDateTimeISO('UTC')
        .toPlainDate(),
      // A full day has no start time; its field is disabled.
      startTime: this.bookingForm.startTime().disabled() ? null : startTime,
      quantity,
      total: this.total(),
    });
    await this.router.navigateByUrl('/reservations');
  }
}
