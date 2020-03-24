package com.xpert.todolist.todo

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import javax.annotation.processing.Generated

@Document
data class Todo(var title: String, var description: String, var finished: Boolean = false) {

    @Id var id: Long,






    fun printTodo(): String? = "${this.id} , ${this.title} , ${this.description} , ${this.finished}"


}