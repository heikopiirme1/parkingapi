import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { RegTicketListComponent } from './ticket-list/reg-ticket-list/reg-ticket-list.component';
import { TicketViewComponent } from './ticket-list/ticket-view/ticket-view.component';
import { AdminComponent } from './admin/admin.component';
import { AddTicketComponent } from './ticket-list/add-ticket/add-ticket.component';



const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'tickets/:reg', component: RegTicketListComponent },
  { path: 'admin/alltickets/:id', component: TicketViewComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/alltickets', component: TicketListComponent },
  { path: 'admin/addticket', component: AddTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }