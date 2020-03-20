package com.xpert.todolist.controller

import com.xpert.todolist.todo.Todo
import com.xpert.todolist.todo.TodoRepository
import org.springframework.data.repository.query.Param
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import java.util.*
@CrossOrigin()
@RestController
@RequestMapping("/todos")
class TodoRestController(val todoRepository: TodoRepository) {


    @RequestMapping(path = [("/id/{todoId}")], method = [(RequestMethod.GET)])
    fun getTodo(@PathVariable("todoId") todoId: Long): Optional<Todo>? {
        return todoRepository.findById(todoId)
    }


    @RequestMapping(path = [("/")], method = [(RequestMethod.GET)])
    fun getAllTodo(): List<Todo> {
        return todoRepository.findAll()
    }

    @RequestMapping(path = [("/new")], method = [(RequestMethod.POST)])
    fun newTodo(@RequestBody todo: Todo) {
        todoRepository.save(todo)
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    fun updateTodo(todo: Todo) {
        todoRepository.save(todo)
    }

    @RequestMapping(path = [("/{todoId}")], method = [(RequestMethod.DELETE)])
    fun deleteTodo(@PathVariable("todoId") todoId: Long) {
        todoRepository.deleteById(todoId)
    }
    @RequestMapping(path = [("/title/{title}")], method = [(RequestMethod.GET)])
    fun getTodoByTitle(@PathVariable("title") title: String): MutableList<Todo>? {
        return todoRepository.findByTitleContains(title)

    }

}