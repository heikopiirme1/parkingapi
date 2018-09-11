import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket } from './ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl: string = "http://localhost:3000/tickets/";

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.apiUrl);
  }

  getTicketsByReg(reg): Observable<Ticket[]>{
    console.log(this.apiUrl + "reg/" + reg);
    return this.http.get<Ticket[]>(this.apiUrl + "reg/" + reg);
  }

  getTicketById(id): Observable<Ticket>{
    console.log(this.apiUrl + id);
    return this.http.get<Ticket>(this.apiUrl + id);
  }

  deleteTicket(id): Observable<Ticket>{
    console.log(this.apiUrl + id);
    return this.http.delete<Ticket>(this.apiUrl + id);
  }

  updateTicket(ticket): Observable<any>{
    const headers = new HttpHeaders()
   .append('Content-Type' , 'application/json');

    return this.http.put(this.apiUrl + ticket._id, ticket);
  }

  addTicket(ticket): Observable<any>{
    const headers = new HttpHeaders()
   .append('Content-Type' , 'application/json');

    return this.http.post(this.apiUrl, ticket);
  }
}