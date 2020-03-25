import { Component, OnInit, IterableDiffers } from '@angular/core';
import { TodoService } from '../todo/shared/todo.service';
import { ITodo } from '../todo';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  private url: string = "http://localhost:8080/todos/";
  newTodo: any;
  todos: ITodo[];


  todoForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private todoservice: TodoService, private router:Router) { }

  ngOnInit() {
    
  }

  create(){
    //console.log(this.todoForm.value);
    this.newTodo = this.todoForm.value;
    
    this.todoservice
    .createTodo(this.newTodo)
    .subscribe(data => this.todos.push(data));
    this.router.navigateByUrl('/todos');
  }
  

}