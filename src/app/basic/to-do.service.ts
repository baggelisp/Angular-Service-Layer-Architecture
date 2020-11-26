import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private _todos: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public readonly todos$: Observable<any[]> = this._todos.asObservable();

  constructor(private api: ApiService) { }

  getToDos(){
    this.api.getToDo()
    .pipe()
      .subscribe((data: any[])=> {
        this._todos.next(data)
      });
  }
}
