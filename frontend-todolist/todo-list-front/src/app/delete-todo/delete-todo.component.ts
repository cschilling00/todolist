import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/shared/todo.service';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
import { ITodo } from '../todo';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css']
})
export class DeleteTodoComponent implements OnInit {

  public todos = [];
  public id : string;
  private url: string = "/todos/";
  public todo: ITodo;

  
    public todoNameControl= new FormControl('');
    public todoDescriptionControl= new FormControl('');
  


  constructor(private todoservice: TodoService, private route: ActivatedRoute, private router:Router) { 
    this.id = this.route.snapshot.paramMap.get('id');

  }
    

  ngOnInit() {    
    this.todoservice.getTodosById(this.id)
        .subscribe(data => {
        this.todo = data;      
        this.todoNameControl.setValue(data.title);
        this.todoDescriptionControl.setValue(data.description);
        //console.log(this.todo.title);
      });
  }


  

  deleteTodo(id: string) {
    this.todoservice.deleteTodo(this.id)
      .subscribe(data => this.todos = data);
    this.router.navigateByUrl(this.url);
      
        
  }

  zurueck(){
    this.router.navigateByUrl(this.url);
  }

  bearbeiten(){
    this.router.navigateByUrl(`${this.url}update/${this.id}`);
  }

}