import { httpResource } from '@angular/common/http';
import { Service } from '@angular/core';
import { OpeningHours } from './opening-hours';

@Service()
export class OpeningHoursService {
  /**
   * The week's opening hours; undefined until loaded. Fetched during SSR, and the
   * hydration transfer cache hands the response to the browser.
   */
  readonly week = httpResource<readonly OpeningHours[]>(() => 'opening-hours');
}
