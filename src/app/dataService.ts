import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class DataService {


    constructor(private http: HttpClient) {
        // this.getJSON().subscribe(data => {
        //     console.log(data)
        };

 getData():Observable<any> {
        return this.http.get('http://localhost:4200/assets/data.json');
      }
    }

   
 
