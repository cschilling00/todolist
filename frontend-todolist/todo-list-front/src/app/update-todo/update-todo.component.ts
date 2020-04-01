import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/shared/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ITodo } from '../todo';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {


  private url: string = "/todos/";
  newTodo: any;
  todos: ITodo[] =  [];
  public id : string;
  private title: string;
  private description: string;
  todo: ITodo;
  //public todoNameControl;
  //public todoDescriptionControl;

  UpdateTodoForm = new FormGroup({  
      todoNameControl: new FormControl(''),
      todoDescriptionControl: new FormControl('')
  });

constructor(private todoservice: TodoService, private route: ActivatedRoute, private router:Router) { 
  this.id = this.route.snapshot.paramMap.get('id');
}

ngOnInit() {  
      
      this.todoservice.getTodosById(this.id)
      .subscribe(data => {
        this.todo = data;   
        console.log(this.UpdateTodoForm.value);   
        console.log(this.todo);   
        this.UpdateTodoForm.setValue({todoNameControl: data.title, todoDescriptionControl: data.description});
      });
}

zurueck(){
  
  this.router.navigateByUrl(this.url);
}


update(){
  
  this.newTodo = this.UpdateTodoForm.getRawValue();   
  this.todo.title = this.newTodo.todoNameControl;
  this.todo.description = this.newTodo.todoDescriptionControl;    
  this.todoservice
  .updateTodo(this.todo, this.id)
  .subscribe(data => this.todos.push(data));
  this.router.navigateByUrl('/todos');
}

}
