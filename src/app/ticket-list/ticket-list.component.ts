import { Component, OnInit, Input } from '@angular/core';
import { TicketService } from '../ticket.service';
import * as moment from 'moment';
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import { Ticket } from '../ticket';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  editing = false;

  edit_ticket = {
    timeInHours: '',
    location: '',
    price: '',
    vehRegistration: '',
    email: '',
    mobile: '',
    create_date: ''
  }

  new_ticket = {
    id: '',
    timeInHours: '',
    location: '',
    price: '',
    vehRegistration: '',
    email: '',
    mobile: ''
  }

  @Input() token;

  ticket: Ticket;

  id: string;

  public tickets = [];

  constructor(private ticketService: TicketService, private router: Router, private _location: Location) { }

  ngOnInit() {
    console.log(this.token);
    console.log(this.new_ticket);

    this.ticketService.getTickets()
        .subscribe(data => this.tickets = data);
  }

  openTicket(ticket) {
    this.editing = true;
    if (this.editing == true){
      this.id = ticket._id;
      (<HTMLInputElement>document.getElementById('newTimeInput')).value = ticket.timeInHours;
      (<HTMLInputElement>document.getElementById('newLocInput')).value = ticket.location;
      (<HTMLInputElement>document.getElementById('newPriceInput')).value = ticket.price;
      (<HTMLInputElement>document.getElementById('newRegInput')).value  = ticket.vehRegistration;
      (<HTMLInputElement>document.getElementById('newEmailInput')).value = ticket.email;
      (<HTMLInputElement>document.getElementById('newMobInput')).value = ticket.mobile;
      (<HTMLInputElement>document.getElementById('adminTitle')).innerHTML = 'Muuda nr. ' + ticket._id;
    }
    
  }

  dateFormat(date) {
    moment.locale('et');
    return moment(date).format("Do MMMM YYYY HH:mm:ss")
  }

  goToAdmin() {
    this.router.navigate(['admin/']);
  }

  emptyData() {
    (<HTMLInputElement>document.getElementById('newTimeInput')).value = '';
    (<HTMLInputElement>document.getElementById('newLocInput')).value = '';
    (<HTMLInputElement>document.getElementById('newPriceInput')).value = '';
    (<HTMLInputElement>document.getElementById('newRegInput')).value  = '';
    (<HTMLInputElement>document.getElementById('newEmailInput')).value = '';
    (<HTMLInputElement>document.getElementById('newMobInput')).value = '';
    (<HTMLInputElement>document.getElementById('adminTitle')).innerHTML = 'Lisa uus kirje';
    this.editing = false;
  }

  newTicket(){
    let headers = new HttpHeaders().set("x-access-token", this.token);
    this.id = this.new_ticket.id;
    this.new_ticket.timeInHours = (<HTMLInputElement>document.getElementById('newTimeInput')).value;
    this.new_ticket.location = (<HTMLInputElement>document.getElementById('newLocInput')).value;
    this.new_ticket.price = (<HTMLInputElement>document.getElementById('newPriceInput')).value;
    this.new_ticket.vehRegistration = (<HTMLInputElement>document.getElementById('newRegInput')).value;
    this.new_ticket.email = (<HTMLInputElement>document.getElementById('newEmailInput')).value;
    this.new_ticket.mobile = (<HTMLInputElement>document.getElementById('newMobInput')).value;


    this.ticketService.addTicket(this.new_ticket, headers)
        .subscribe((data)=>{ 
        console.log("success");
        this.emptyData();
        this.ticketService.getTickets()
        .subscribe(data => this.tickets = data);
    });
}

updateTicket(){
  let headers = new HttpHeaders().set("x-access-token", this.token);
  this.edit_ticket.timeInHours = (<HTMLInputElement>document.getElementById('newTimeInput')).value;
  this.edit_ticket.location = (<HTMLInputElement>document.getElementById('newLocInput')).value;
  this.edit_ticket.price = (<HTMLInputElement>document.getElementById('newPriceInput')).value;
  this.edit_ticket.vehRegistration = (<HTMLInputElement>document.getElementById('newRegInput')).value;
  this.edit_ticket.email = (<HTMLInputElement>document.getElementById('newEmailInput')).value;
  this.edit_ticket.mobile = (<HTMLInputElement>document.getElementById('newMobInput')).value;


  this.ticketService.updateTicket(this.edit_ticket, this.id, headers)
      .subscribe((data)=>{ 
      console.log("success");
      this.emptyData();
      this.ticketService.getTickets()
      .subscribe(data => this.tickets = data);
  });

  
}
  deleteTicket(){
    let headers = new HttpHeaders().set("x-access-token", this.token);

    this.ticketService.deleteTicket(this.id, headers)
      .subscribe((data)=>{ 
        console.log("success");
        this.emptyData();
        this.ticketService.getTickets()
          .subscribe(data => this.tickets = data);
  }); 
    
}}
