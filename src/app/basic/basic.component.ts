import { Component, OnInit } from '@angular/core';
import { ToDoService } from './to-do.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor(public todosService: ToDoService) { }

  ngOnInit(): void {
  }

  getToDos(){
    this.todosService.getToDos()
  }

}
