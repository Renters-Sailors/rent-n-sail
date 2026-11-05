import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { delay, of } from 'rxjs';
import { NewReservation, ReservationJson } from './reservation';

// Mock backend storage, in the JSON shape the API sends; lives until the page reloads.
let stored: readonly ReservationJson[] = [];
let lastId = 0;

/** Answers `reservations` requests until the backend has that API; remove it from app.config then. */
export const reservationsMockInterceptor: HttpInterceptorFn = (request, next) => {
  const match = /^\/api\/reservations(?:\/(\d+))?$/.exec(request.url);
  if (!match) return next(request);
  const respond = (status: number, body: unknown = null) =>
    of(new HttpResponse({ status, body, url: request.url })).pipe(delay(300));

  if (request.method === 'GET') return respond(200, stored);
  if (request.method === 'POST') {
    const reservation = request.body as NewReservation;
    const saved = { ...reservation, id: ++lastId, date: reservation.date.toString() };
    stored = [saved, ...stored];
    return respond(201, saved);
  }
  if (request.method === 'DELETE') {
    stored = stored.filter(({ id }) => id !== Number(match[1]));
    return respond(204);
  }
  return respond(405);
};
