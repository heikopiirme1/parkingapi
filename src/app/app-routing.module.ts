import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegTicketListComponent } from './ticket-list/reg-ticket-list/reg-ticket-list.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'tickets/:reg', component: RegTicketListComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }