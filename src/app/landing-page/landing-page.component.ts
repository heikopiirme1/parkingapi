import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit() {
  }

  findTickets(regNo){
    this.router.navigate(['tickets/' + regNo]);
  }
  
}
