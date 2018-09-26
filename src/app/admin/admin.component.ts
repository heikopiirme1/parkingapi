import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Router} from "@angular/router";
import { Location } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user = {
    name: '',
    password: ''
  }
  
  @Input() token;
  @Output() tokenChange = new EventEmitter<string>();

  constructor(private _location: Location, private http: HttpClient) { }

  ngOnInit() {
  }

  auth() {
    this.http.post('http://localhost:3000/authenticate', {
      name: this.user.name,
      password: this.user.password
    }).subscribe((data) => {
      if (data['token']) {
        this.token = data['token'];
        this.tokenChange.emit(this.token);
      } else if (data['success'] == false) {
        (<HTMLInputElement>document.getElementById('errMsg')).innerHTML = 'Vale kasutaja või parool';
      }
    });
  }
  
  goBack() {
    this._location.back();
  }
  
}
