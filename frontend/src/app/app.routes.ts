import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DiscoverRentalPageComponent } from './discover-rental-page/discover-rental-page.component';
import { MyReservationsPageComponent } from './my-reservations-page/my-reservations-page.component';
import { RentalEquipmentService } from './rental-equipment/rental-equipment.service';

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
  // `/:id` gets its slug added, e.g. `/1` → `/1/kayak`. Unknown ids go home.
  {
    path: ':id',
    pathMatch: 'full',
    redirectTo: async ({ params }) => {
      const item = await inject(RentalEquipmentService).find(Number(params['id']));
      return item ? `/${item.id}/${item.slug}` : '/';
    },
  },
  {
    path: ':id/:slug',
    component: BookingPageComponent,
    title: async ({ params }) => {
      const item = await inject(RentalEquipmentService).find(Number(params['id']));
      return `Book ${item?.name ?? 'equipment'} — Rent'n'Sail`;
    },
  },
];
