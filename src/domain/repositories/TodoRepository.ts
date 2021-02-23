import { Todo } from "../entities/Todo"

export interface TodoRepository {
    GetTodos(): Promise<Todo[]>
    AddTodos(data: any): Promise<any>
    DeleteTodos(data: any): Promise<any>
    UpdateTodos(data: any): Promise<any>
}
