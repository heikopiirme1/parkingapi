import { Component, OnInit, Input } from '@angular/core';
import { TicketService } from '../../ticket.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { Ticket } from '../../ticket';


@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {
  ticket: Ticket;

  new_ticket = {
    _id: '',
    timeInHours: '',
    location: '',
    price: '',
    vehRegistration: '',
    email: '',
    mobile: ''
  }
  
  id: string;

  constructor(private ticketService: TicketService, private router: Router, private route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
  }

  newTicket(){
    this.new_ticket._id = this.id;
    this.new_ticket.timeInHours = (<HTMLInputElement>document.getElementById('timeInput')).value;
    this.new_ticket.location = (<HTMLInputElement>document.getElementById('locInput')).value;
    this.new_ticket.price = (<HTMLInputElement>document.getElementById('priceInput')).value;
    this.new_ticket.vehRegistration = (<HTMLInputElement>document.getElementById('regInput')).value;
    this.new_ticket.email = (<HTMLInputElement>document.getElementById('emailInput')).value;
    this.new_ticket.mobile = (<HTMLInputElement>document.getElementById('mobInput')).value;


    this.ticketService.addTicket(this.new_ticket)
        .subscribe((data)=>{ 
        console.log("success");
    });

    this.router.navigate(['admin/alltickets/']);
  }

  goToTickets() {
    this.router.navigate(['admin/alltickets/']);
  }
}
