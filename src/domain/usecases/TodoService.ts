import { Todo } from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"

export interface TodoService {
  GetTodos(): Todo[]
  AddTodos(data: any): Todo[]
}

export class TodoServiceImpl implements TodoService {
  todoRepo: TodoRepository

  constructor(tr: TodoRepository) {
    this.todoRepo = tr
  }

  GetTodos(): Todo[] {
    return this.todoRepo.GetTodos()
  }

  AddTodos = (data: Todo): Todo[] => {
    const age = data.age
    console.log(age)
    console.log(data)

    if (age < 18) {
      data = {
        id: NaN,
        title: "",
        age: NaN,
        completed: false,
      }
    }
    console.log(data)

    return this.todoRepo.AddTodos(data)
  }

  DeleteTodos(data: Todo): Todo[] {
    return this.todoRepo.DeleteTodos(data)
  }

  UpdateTodos(data: Todo): Todo[] {
    return this.todoRepo.UpdateTodos(data)
  }
}
