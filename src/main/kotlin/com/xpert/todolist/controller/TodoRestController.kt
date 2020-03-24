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


    @GetMapping("/id/{todoId}")
    fun getTodo(@PathVariable("todoId") todoId: Long): Optional<Todo> {
        return todoRepository.findById(todoId)
    }


    @GetMapping("/")
    fun getAllTodo(): List<Todo> {
        return todoRepository.findAll()
    }

    @PostMapping("/new")
    fun newTodo(@RequestBody  todo: Todo) {
//        val mapper = jacksonObjectMapper().registerModule(KotlinModule())
//        val newTodo : Todo =mapper.readValue(json.toString())

        todoRepository.save(todo)
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