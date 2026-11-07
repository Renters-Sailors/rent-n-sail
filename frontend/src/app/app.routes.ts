import { inject } from '@angular/core';
import { CanMatchFn, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DiscoverRentalPageComponent } from './discover-rental-page/discover-rental-page.component';
import { MyReservationsPageComponent } from './my-reservations-page/my-reservations-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RentalEquipmentService } from './rental-equipment/rental-equipment.service';

/** Matches only ids of existing equipment; anything else falls through to the 404 page. */
const equipmentExists: CanMatchFn = async (_route, [id]) =>
  inject(RentalEquipmentService).getById(Number(id?.path)) !== undefined;

export const routes: Routes = [
  {
    path: '',
    component: DiscoverRentalPageComponent,
    title: "Rent'n'Sail",
    data: { keepAlive: true },
  },
  { path: 'contact', component: ContactPageComponent, title: "Contact — Rent'n'Sail" },
  {
    path: 'reservations',
    component: MyReservationsPageComponent,
    canActivate: [authGuard],
    title: "My reservations — Rent'n'Sail",
  },
  // `/:id` gets its slug added, e.g. `/1` → `/1/kayak`. The redirect sits in a child because
  // a route can't have both canMatch and redirectTo.
  {
    path: ':id',
    canMatch: [equipmentExists],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: async ({ params }) => {
          const item = inject(RentalEquipmentService).getById(Number(params['id']))();
          return item ? `/${item.id}/${item.slug}` : '/';
        },
      },
    ],
  },
  {
    path: ':id/:slug',
    canMatch: [equipmentExists],
    component: BookingPageComponent,
    title: async ({ params }) => {
      const item = inject(RentalEquipmentService).getById(Number(params['id']))();
      return `Book ${item?.name ?? 'equipment'} — Rent'n'Sail`;
    },
  },
  { path: '**', component: NotFoundPageComponent, title: "Page not found — Rent'n'Sail" },
];
