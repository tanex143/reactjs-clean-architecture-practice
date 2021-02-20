import { Todo } from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"

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

  AddTodos(data: Todo): Todo[] {
    return this.todoRepo.AddTodos(data)
  }

  DeleteTodos(data: Todo): Todo[] {
    return this.todoRepo.DeleteTodos(data)
  }

  UpdateTodos(data: Todo): Todo[] {
    return this.todoRepo.UpdateTodos(data)
  }
}
