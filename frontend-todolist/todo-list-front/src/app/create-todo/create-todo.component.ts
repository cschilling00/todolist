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

  newTodo: any;
  todos: ITodo[] =[];


  CreateTodoForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private todoservice: TodoService, private router:Router) { }

  ngOnInit() {
    
  }

  create(){
    console.log(this.CreateTodoForm.value);
    this.newTodo = this.CreateTodoForm.value;

    this.todoservice
    .createTodo(this.newTodo)
    .subscribe(data => {
      this.todos.push(data)
    });
    
    this.router.navigateByUrl('/todos');
    console.log(this.todos);
  }
  zurueck(){  
    this.router.navigateByUrl('/todos/');
  }

}