import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
//https://github.com/angular/angular/issues/15548
import { map } from "rxjs/operators";
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  private apiUrl = environment.addressBookApiBaseUrl + '/api/contacts';
  // private apiUrl = environment.foodBookApiBaseUrl + '/api/food';
  data: any = {};

  constructor(private http: Http) {
    this.getContacts();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
    .pipe(map((res: Response) => res.json()));
  }

  getContacts() {
    this.getData().subscribe(data => {
      this.data = data;
    });
  }
}
