import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegTicketListComponent } from './ticket-list/reg-ticket-list/reg-ticket-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    LandingPageComponent,
    RegTicketListComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
