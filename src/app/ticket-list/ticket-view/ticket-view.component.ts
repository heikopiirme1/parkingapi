import { Component, OnInit, Input } from '@angular/core';
import { TicketService } from '../../ticket.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import {Location} from '@angular/common';
import { Ticket } from '../../ticket';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent implements OnInit {

  ticket: Ticket;

  edit_ticket = {
    _id: '',
    timeInHours: '',
    location: '',
    price: '',
    vehRegistration: '',
    email: '',
    mobile: ''
  }
  
  id: string;

  editing = false;

  constructor(private ticketService: TicketService, private router: Router, private route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
      this.ticketService.getTicketById(this.id)
          .subscribe(ticket => this.ticket = ticket);
  }

  dateFormat(date) {
    moment.locale('et');
    return moment(date).format("Do MMMM YYYY HH:mm:ss")
  }

  delTicket(){
    this.ticketService.deleteTicket(this.id)
        .subscribe((data)=>{ 
        console.log("success");
    });
    this._location.back();
  }

  editTicket(){
    this.edit_ticket._id = this.id;
    this.edit_ticket.timeInHours = (<HTMLInputElement>document.getElementById('timeInput')).value;
    this.edit_ticket.location = (<HTMLInputElement>document.getElementById('locInput')).value;
    this.edit_ticket.price = (<HTMLInputElement>document.getElementById('priceInput')).value;
    this.edit_ticket.vehRegistration = (<HTMLInputElement>document.getElementById('regInput')).value;
    this.edit_ticket.email = (<HTMLInputElement>document.getElementById('emailInput')).value;
    this.edit_ticket.mobile = (<HTMLInputElement>document.getElementById('mobInput')).value;


    this.ticketService.updateTicket(this.edit_ticket)
        .subscribe((data)=>{ 
        console.log("success");
    });

    this.editing = false;
    this.router.navigate(['admin/alltickets/']);
  }

  startEditing() {
    this.editing = true;
  }

  stopEditing() {
    this.editing = false;
  }

  goBack() {
    this._location.back();
  }
}
