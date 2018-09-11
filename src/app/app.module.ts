import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketViewComponent } from './ticket-list/ticket-view/ticket-view.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegTicketListComponent } from './ticket-list/reg-ticket-list/reg-ticket-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AddTicketComponent } from './ticket-list/add-ticket/add-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketViewComponent,
    LandingPageComponent,
    RegTicketListComponent,
    AdminComponent,
    AddTicketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
