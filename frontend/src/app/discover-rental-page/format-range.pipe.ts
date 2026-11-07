import { Pipe, PipeTransform } from '@angular/core';

/** Formats a number range, such as "2–4". */
@Pipe({ name: 'formatRange' })
export class FormatRangePipe implements PipeTransform {
  transform(start: number, end: number): string {
    return new Intl.NumberFormat().formatRange(start, end);
  }
}
