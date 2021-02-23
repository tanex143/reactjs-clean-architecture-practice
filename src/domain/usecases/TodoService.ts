import { Todo } from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"
import { reactLocalStorage } from "reactjs-localstorage"

export interface TodoService {
  GetTodos(): Promise<Todo[]>
}

export class TodoServiceImpl implements TodoService {
  todoRepo: TodoRepository

  constructor(tr: TodoRepository) {
    this.todoRepo = tr
  }

  async GetTodos(): Promise<Todo[]> {
    return this.todoRepo.GetTodos()
  }

  async AddTodos(data: any): Promise<any> {
    const age = data.age

    if (age < 18) {
      throw alert("age is below 18")
    }

    return this.todoRepo.AddTodos(data)
  }

  async DeleteTodos(data: any): Promise<any> {
    return this.todoRepo.DeleteTodos(data)
  }

  async UpdateTodos(data: any): Promise<any> {
    return this.todoRepo.UpdateTodos(data)
  }
}
