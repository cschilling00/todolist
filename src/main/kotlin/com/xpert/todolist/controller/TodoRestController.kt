package com.xpert.todolist.controller

import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.module.kotlin.KotlinModule
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.xpert.todolist.todo.Todo
import com.xpert.todolist.todo.TodoRepository
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import java.util.*
@CrossOrigin()
@RestController
@RequestMapping("/todos")
class TodoRestController(val todoRepository: TodoRepository) {


    @GetMapping("/{todoId}")
    fun getTodo(@PathVariable("todoId") todoId: String): Optional<Todo> {
        return todoRepository.findById(todoId)
    }


    @GetMapping("/")
    fun getAllTodo(): List<Todo> {
        return todoRepository.findAll()
    }

    @PostMapping("/new")
    fun newTodo(@RequestBody  todo: Todo) {
        todoRepository.save(todo)
    }

    @PutMapping("/update/{todoId}")
    //@ResponseStatus(HttpStatus.OK)
    fun updateTodo(@RequestBody todo: Todo, @PathVariable("todoId") todoId: String) {
        todo.id = todoId
        todoRepository.save(todo)
    }

    @DeleteMapping("/{todoId}")
    fun deleteTodo(@PathVariable("todoId") todoId: String) {
        todoRepository.deleteById(todoId)
    }

}