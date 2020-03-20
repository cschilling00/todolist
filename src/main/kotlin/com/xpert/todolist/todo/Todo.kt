package com.xpert.todolist.todo

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
class Todo(@Id var id: Long?, var title: String?, var description: String?, var finished: Boolean? = false) {



    fun printTodo() : String? = "${this.id} , ${this.title} , ${this.description} , ${this.finished}"




}