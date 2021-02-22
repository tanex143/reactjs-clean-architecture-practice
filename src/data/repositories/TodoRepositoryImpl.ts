import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"

class TodoDTO {
    id = 0
    title = ""
    age = 0
    completed = false
}

const todoList: Todo[] = []

export class TodoRepositoryImpl implements TodoRepository {
    GetTodos(): Todo[] {
        return todoList.map((todo: TodoDTO) => new Todo(todo.id, todo.title, todo.age, todo.completed))
    }

    AddTodos(data: Todo): Todo[] {
        todoList.push(data)

        return todoList.map((todo: TodoDTO) => new Todo(todo.id, todo.title, todo.age, todo.completed))
    }

    DeleteTodos(data: Todo): Todo[] {
        const index = todoList.findIndex((f) => f.id === data.id)
        todoList.splice(index, 1)

        return todoList.map((todo: TodoDTO) => new Todo(todo.id, todo.title, todo.age, todo.completed))
    }

    UpdateTodos(data: Todo): Todo[] {
        const index = todoList.findIndex((f) => f.id === data.id)
        todoList[index].title = data.title

        return todoList.map((todo: TodoDTO) => new Todo(todo.id, todo.title, todo.age, todo.completed))
    }
}
