import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"
import axios from "axios"

class TodoDTO {
    userId = 0
    id = 0
    title = ""
    completed = false
}

const todoList: Todo[] = []

export class TodoRepositoryImpl implements TodoRepository {
    async GetTodos(): Promise<Todo[]> {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos")

        return data.splice(0, 10).map((todo: TodoDTO) => new Todo(todo.userId, todo.id, todo.title, todo.completed))
    }

    AddTodo(data: Todo): Todo[] {
        todoList.push(data)

        return todoList.map((todo: TodoDTO) => new Todo(todo.userId, todo.id, todo.title, todo.completed))
    }
}
