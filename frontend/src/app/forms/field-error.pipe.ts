import { Pipe, PipeTransform } from '@angular/core';
import { FieldTree } from '@angular/forms/signals';

/**
 * A field's first error message, once the user has left the field; otherwise null.
 * Impure because the field itself stays the same object while its state changes.
 */
@Pipe({ name: 'fieldError', pure: false })
export class FieldErrorPipe implements PipeTransform {
  transform<T>(field: FieldTree<T>): string | null {
    const state = field();
    return (state.touched() && state.errors()[0]?.message) || null;
  }
}
