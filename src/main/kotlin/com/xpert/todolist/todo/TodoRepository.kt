package com.xpert.todolist.todo

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.repository.query.Param
import java.util.*

interface TodoRepository: MongoRepository<Todo, String?> {

}