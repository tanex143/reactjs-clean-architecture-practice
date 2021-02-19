import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"

class TodoDTO {
    userId = 0
    id = 0
    title = ""
    completed = false
}

const todoList: Todo[] = []

export class TodoRepositoryImpl implements TodoRepository {
    GetTodos(): Todo[] {
        return todoList.map((todo: TodoDTO) => new Todo(todo.userId, todo.id, todo.title, todo.completed))
    }

    AddTodos(data: Todo): Todo[] {
        todoList.push(data)

        return todoList.map((todo: TodoDTO) => new Todo(todo.userId, todo.id, todo.title, todo.completed))
    }

    DeleteTodos(data: Todo): Todo[] {
        const index = todoList.findIndex((f) => f.id === data.id)
        todoList.splice(index, 1)

        return todoList.map((todo: TodoDTO) => new Todo(todo.userId, todo.id, todo.title, todo.completed))
    }
}
