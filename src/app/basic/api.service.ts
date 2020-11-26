import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  configUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getToDo(){
    return this.http.get(this.configUrl + '/todos');
  }
}

