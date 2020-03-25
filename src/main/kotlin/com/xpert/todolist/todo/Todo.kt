package com.xpert.todolist.todo

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Todo(var title: String, var description: String) {

    @Id
    lateinit var id: String
    var finished: Boolean = false



}