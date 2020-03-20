import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos = [];


  constructor(private todoservice: TodoService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.todoservice.getTodos()
        .subscribe(data => this.todos = data);
  }


  getById(id: number) {
    this.todoservice.getTodosById(id)
        .subscribe(data => this.todos = data);
  }

  deleteTodo(id: number) {
    this.todoservice.deleteTodo(id)
      .subscribe(data => this.todos = data);
        
  }




}
