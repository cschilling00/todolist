import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/shared/todo.service';
import { ITodo } from '../todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  newTodo: ITodo;
  public title: string;
  public description: string;
  private url: string = "http://localhost:8080/todos/";
  todos: any;

  constructor(private todoservice: TodoService) { }

  ngOnInit() {
    
  }

  create(){
    this.newTodo = new ITodo(this.title,this.description);

    this.todoservice.createTodo(this.newTodo)
                      .subscribe(todo => this.todos.push(todo));
  }
  

}
