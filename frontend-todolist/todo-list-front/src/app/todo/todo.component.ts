import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos = [];
  public error;
  private url: string = "/todos/new";


  constructor(private todoservice: TodoService, private router:Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.todoservice.getTodos()
        .subscribe(data => this.todos = data);
  }

  onClick(){
    this.router.navigateByUrl(this.url);
  }









}
