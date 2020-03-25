import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/shared/todo.service';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css']
})
export class DeleteTodoComponent implements OnInit {

  public todos = [];
  public id : string;
  private url: string = "/todos/";


  constructor(private todoservice: TodoService, private route: ActivatedRoute, private router:Router) { 
    this.id = this.route.snapshot.paramMap.get('id');

  }
    

  ngOnInit() {    
    this.todoservice.getTodosById(this.id)
        .subscribe(data => this.todos = data);
  }


  

  deleteTodo(id: string) {
    this.todoservice.deleteTodo(this.id)
      .subscribe(data => this.todos = data);
    this.router.navigateByUrl(this.url);
      
        
  }

  zurueck(){
    this.router.navigateByUrl(this.url);
  }

}