import { Todo } from "../entities/Todo"

export interface TodoRepository {
    GetTodos(): Promise<Todo[]>
    AddTodos(data: any): Promise<any>
    DeleteTodos(data: any): Todo[]
    UpdateTodos(data: any): Todo[]
}
