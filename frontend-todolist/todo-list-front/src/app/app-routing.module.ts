import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AppComponent } from './app.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';


const routes: Routes = [

  
  {path: '' , redirectTo: '/todos', pathMatch: 'full'},
  {path: 'todos', component: TodoComponent},
  {path: 'todos/', component: TodoComponent},
  {path: 'todos/new', component: CreateTodoComponent},
  {path: 'todos/:id', component: DeleteTodoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TodoComponent];
