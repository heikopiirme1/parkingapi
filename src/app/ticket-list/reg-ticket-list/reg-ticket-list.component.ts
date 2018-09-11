import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../ticket.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import {Location} from '@angular/common';

@Component({
  selector: 'app-reg-ticket-list',
  templateUrl: './reg-ticket-list.component.html',
  styleUrls: ['./reg-ticket-list.component.css']
})
export class RegTicketListComponent implements OnInit {

  reg: string;

  public tickets = [];

  constructor(private ticketService: TicketService, private route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
      this.reg = this.route.snapshot.params.reg;
      this.ticketService.getTicketsByReg(this.reg)
          .subscribe(data => this.tickets = data);
    }

    dateFormat(date) {
      moment.locale('et');
      return moment(date).format("Do MMMM YYYY HH:mm:ss")
    }
  
    goBack() {
      this._location.back();
    }

}
