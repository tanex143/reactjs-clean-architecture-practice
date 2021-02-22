import { Todo } from "../entities/Todo"

export interface TodoRepository {
    GetTodos(): Todo[]
    AddTodos(data: any): Todo[]
    DeleteTodos(data: any): Todo[]
    UpdateTodos(data: any): Todo[]
}
