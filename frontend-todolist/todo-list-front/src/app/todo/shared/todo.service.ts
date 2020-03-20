import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from 'src/app/todo';
import { Observable } from 'rxjs';
import { TodoComponent } from '../todo.component';



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url: string = "http://localhost:8080/todos/";
  private todo: Observable<ITodo>;

  constructor(private http: HttpClient) {
    
  } 

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.url);
    
  }

  createTodo(todo:Observable<ITodo>){
    return this.http.post(`${this.url}new`, this.todo);

  }

  getTodosById(id: number): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${this.url}+${id}`);
  }

  deleteTodo(id: number): Observable<ITodo[]> {
    return this.http.delete<ITodo[]>(`${this.url}`);

  }



}


