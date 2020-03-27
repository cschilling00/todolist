import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo/shared/todo.service';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CreateTodoComponent,
    TodoComponent,
    DeleteTodoComponent,
    UpdateTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
