import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('Data service connected...');
  }

  getReminders(){
    return this.http.get('http://localhost:5000/api/reminder')
      .map(res => res.json());
  }

}
