import { Component, inject, RESPONSE_INIT } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Shown for any URL no other route matches; server rendering answers it with 404. */
@Component({
  imports: [RouterLink],
  selector: 'app-not-found-page',
  styleUrl: './not-found-page.component.scss',
  templateUrl: './not-found-page.component.html',
})
export class NotFoundPageComponent {
  constructor() {
    // Only set while rendering on the server.
    const response = inject(RESPONSE_INIT, { optional: true });
    if (response) response.status = 404;
  }
}
