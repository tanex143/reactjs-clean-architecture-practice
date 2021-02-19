import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"
import axios from "axios"

export class TodoRepositoryImpl implements TodoRepository {
    async GetTodos(): Promise<Todo[]> {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos")

        return data.splice(0, 10)
    }
}
