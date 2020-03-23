import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/shared/todo.service';
import { ITodo } from '../todo';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  public title: string;
  public description: string;
  private url: string = "http://localhost:8080/todos/";
  todos: ITodo[];
  newTodo : Observable<ITodo>;


  todoForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private todoservice: TodoService) { }

  ngOnInit() {
    
  }

  create(){
    console.log(this.todoForm.value);
  }
  

}
