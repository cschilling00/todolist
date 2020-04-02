import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';
import { Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos = [];
  public todotofinish = [];
  public done = [];
  public error;
  private url: string = "/todos/new";


  constructor(private todoservice: TodoService, private router:Router) { }

  ngOnInit() {
    this.getAll();
    
    
  }

  getAll() {
    this.todoservice.getTodos()
        .subscribe(data => {
          this.todos = data;
          console.log("Das sind die Todos in der get all methode:" + this.todos);
          for(let item of data){
          if(item.finished == true){
            this.done.push(item);
          }else{
            this.todotofinish.push(item);
          } 
        }         
                 
      });

      console.log("Das sind die Todos nach dem Get Request:" + this.todos.toString());
  }

  onClick(){
    this.router.navigateByUrl(this.url);
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);      

      //console.log(event.container.data);
      console.log(event.container.data[event.currentIndex]["title"]);
      console.log("Alle Todos: " +this.todos);
      for(let todo of this.todos){        
        console.log("Das sind die Todos aus der Forschleife:" + todo);
        if(event.container.data[event.currentIndex]["title"] == todo.title){
          //console.log(event.container.data[event.currentIndex]["title"]);
          if(todo.finished == false){
            todo.finished = true;
          } else{
            todo.finished = false;
          }
             

          //console.log(this.todotofinish);
          //console.log(this.done);
          //console.log(todo);
          this.todoservice
          .updateTodo(todo, todo.id)
          .subscribe(data => this.todos.push(data));
          console.log("Das sind die Todos aus der Forschleife nach der Updatemethode:" + todo);
                            
        }                                              
      }     
          
          /*for(let item of this.todos){
            if(item.finished == true){
              this.done.push(item);
            }else{
              this.todotofinish.push(item);
            } 
          }*/ 
    }                       

  }









}

