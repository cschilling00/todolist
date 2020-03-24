package com.xpert.todolist.todo

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Todo(var title: String, var description: String) {

    @Id
    var id: Long = 1
    var finished: Boolean = false



}