import { Todo } from "../entities/Todo"

export interface TodoRepository {
    GetTodos(): Todo[]
    AddTodos(data: Todo): Todo[]
    DeleteTodos(data: any): Todo[]
}
