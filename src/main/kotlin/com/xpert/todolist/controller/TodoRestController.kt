package com.xpert.todolist.controller

import com.sun.javafx.beans.IDProperty
import com.xpert.todolist.todo.Todo
import com.xpert.todolist.todo.TodoRepository
import org.springframework.data.annotation.Id
import org.springframework.data.repository.query.Param
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.
import java.util.*
@CrossOrigin()
@RestController
@RequestMapping("/todos")
class TodoRestController(val todoRepository: TodoRepository) {


    @GetMapping("/id/{todoId}")
    fun getTodo(@PathVariable("todoId") todoId: Long): Optional<Todo> {
        return todoRepository.findById(todoId)
    }


    @GetMapping("/")
    fun getAllTodo(): List<Todo> {
        return todoRepository.findAll()
    }

    @PostMapping("/new")
    fun newTodo(@RequestBody json :Map<String,String>) {

        newTodo = Todo(json["title"], json["description"], false)
        todoRepository.save(newTodo)
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    fun updateTodo(todo: Todo) {
        todoRepository.save(todo)
    }

    @RequestMapping("/{todoId}")
    fun deleteTodo(@PathVariable("todoId") todoId: Long) {
        todoRepository.deleteById(todoId)
    }
    @RequestMapping("/title/{title}")
    fun getTodoByTitle(@PathVariable("title") title: String): MutableList<Todo> {
        return todoRepository.findByTitleContains(title)

    }

}