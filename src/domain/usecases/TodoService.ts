import { Todo } from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"
import { reactLocalStorage } from "reactjs-localstorage"

export interface TodoService {
  GetTodos(): Todo[]
}

export class TodoServiceImpl implements TodoService {
  todoRepo: TodoRepository

  constructor(tr: TodoRepository) {
    this.todoRepo = tr
  }

  GetTodos(): Todo[] {
    return this.todoRepo.GetTodos()
  }

  AddTodos(data: any) {
    const age = data.age

    if (age < 18) {
      const getLocalData = reactLocalStorage.get("todoList", "[]")
      const JSONUnbox = JSON.parse(getLocalData)
      alert("Your age is below 18. Please grow more.")
      return JSONUnbox
    }

    return this.todoRepo.AddTodos(data)
  }

  DeleteTodos(data: any) {
    return this.todoRepo.DeleteTodos(data)
  }

  UpdateTodos(data: any) {
    return this.todoRepo.UpdateTodos(data)
  }
}
