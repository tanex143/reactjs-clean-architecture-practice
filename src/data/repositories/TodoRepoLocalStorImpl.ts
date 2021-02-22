import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"
import { reactLocalStorage } from "reactjs-localstorage"

class TodoDTO {
  id = 0
  title = ""
  age = 0
  completed = false
}

export class TodoRepoLocalStorImpl implements TodoRepository {
  GetTodos(): Todo[] {
    const getLocalData = reactLocalStorage.get("todoList", "[]")
    const localData = JSON.parse(getLocalData)

    return localData.map((todo: TodoDTO) => new Todo(todo.id, todo.title, todo.age, todo.completed))
  }

  AddTodos(data: Todo): Todo[] {
    const getLocalData = reactLocalStorage.get("todoList", "[]")
    const JSONUnbox = JSON.parse(getLocalData)
    JSONUnbox.push(data)
    reactLocalStorage.set("todoList", JSON.stringify(JSONUnbox))

    return JSONUnbox.map((todo: TodoDTO) => new Todo(todo.id, todo.title, todo.age, todo.completed))
  }

  DeleteTodos(data: Todo): Todo[] {
    const getLocalData = reactLocalStorage.get("todoList", "[]")
    const JSONUnbox = JSON.parse(getLocalData)
    const index = JSONUnbox.findIndex((f: any) => f.id === data.id)
    JSONUnbox.splice(index, 1)
    reactLocalStorage.set("todoList", JSON.stringify(JSONUnbox))

    return JSONUnbox.map((todo: TodoDTO) => new Todo(todo.id, todo.title, todo.age, todo.completed))
  }

  UpdateTodos(data: Todo): Todo[] {
    const getLocalData = reactLocalStorage.get("todoList", "[]")
    const JSONUnbox = JSON.parse(getLocalData)
    const index = JSONUnbox.findIndex((f: any) => f.id === data.id)
    JSONUnbox[index].title = data.title
    reactLocalStorage.set("todoList", JSON.stringify(JSONUnbox))

    return JSONUnbox.map((todo: TodoDTO) => new Todo(todo.id, todo.title, todo.age, todo.completed))
  }
}
