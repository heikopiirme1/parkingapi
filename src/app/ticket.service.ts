import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket } from './ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  @Input() token;

  private apiUrl: string = "http://localhost:3000/tickets/";

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.apiUrl);
  }

  getTicketsByReg(reg): Observable<Ticket[]>{
    console.log(this.apiUrl + "reg/" + reg);
    return this.http.get<Ticket[]>(this.apiUrl + "reg/" + reg);
  }

  getTicketById(id): Observable<any>{
    return this.http.get<any>(this.apiUrl + id);
  }

  deleteTicket(id, headers: any){
    return this.http.delete(this.apiUrl + id, {headers});
  }

  updateTicket(edit_ticket, id, headers: any): Observable<any>{
    return this.http.put(this.apiUrl + id, edit_ticket, {headers});
  }

  addTicket(new_ticket, headers: any): Observable<any>{
    return this.http.post(this.apiUrl, new_ticket, {headers});
  }
}