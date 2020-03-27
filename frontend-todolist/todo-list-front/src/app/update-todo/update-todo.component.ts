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
  todos: ITodo[];
  public id : string;
  private title: string;
  private description: string;
  todo: ITodo;

  updateForm = new FormGroup({
    titleShoww: new FormControl(''),
    descriptionShoww: new FormControl('')
  });

constructor(private todoservice: TodoService, private route: ActivatedRoute, private router:Router) { 
  this.id = this.route.snapshot.paramMap.get('id');
}

ngOnInit() {  
      
      console.log(this.todoservice.getTodosById(this.id)
      .subscribe(data => this.todo = data));
      this.title = this.todo.title;
      this.description = this.todo.description;
      
  
}

zurueck(){
  this.router.navigateByUrl(this.url);
}

setValue(){
  this.updateForm.setValue({
    titleShoww: this.id,
    descriptionShoww: this.id
  });
}


update(){
  console.log(this.updateForm.value);
  this.newTodo = this.updateForm.value;
  
  this.todoservice
  .updateTodo(this.newTodo, this.id)
  .subscribe(data => this.todos.push(data));
  this.router.navigateByUrl('/todos');
}

}