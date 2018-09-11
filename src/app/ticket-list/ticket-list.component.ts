import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import * as moment from 'moment';
import {Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  public tickets = [];

  constructor(private ticketService: TicketService, private router: Router, private _location: Location) { }

  ngOnInit() {
    this.ticketService.getTickets()
        .subscribe(data => this.tickets = data);
  }

  openTicket(id) {
    this.router.navigate(['admin/alltickets/' + id]);
  }

  dateFormat(date) {
    moment.locale('et');
    return moment(date).format("Do MMMM YYYY HH:mm:ss")
  }

  goToAdmin() {
    this.router.navigate(['admin/']);
  }
}
