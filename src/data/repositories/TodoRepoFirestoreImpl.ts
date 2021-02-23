import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"
import { reactLocalStorage } from "reactjs-localstorage"
import { db } from "./../../firebaseConfig"

class TodoDTO {
  id = 0
  title = ""
  age = 0
  completed = false
}

const todoListLocal: Todo[] = []

export class TodoRepoFirestoreImpl implements TodoRepository {
  async GetTodos(): Promise<Todo[]> {
    const FirestoreData = (await db.collection("todoList").get()).docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }))
    console.log("from firestore list", FirestoreData)

    return FirestoreData.map((todo: TodoDTO) => new Todo(todo.id, todo.title, todo.age, todo.completed))
  }

  async AddTodos(data: Todo): Promise<any> {
    const JSONString = JSON.stringify(data.id)
    await db.collection("todoList").doc(JSONString).set({
      id: data.id,
      title: data.title,
      age: data.age,
      completed: data.completed,
    })

    const FirestoreData = (await db.collection("todoList").get()).docs.map((doc: any) => doc.data())
    return FirestoreData.map((todo: TodoDTO) => new Todo(todo.id, todo.title, todo.age, todo.completed))
  }

  async DeleteTodos(data: Todo): Promise<any> {
    const JSONString = JSON.stringify(data.id)
    await db.collection("todoList").doc(JSONString).delete()

    const FirestoreData = (await db.collection("todoList").get()).docs.map((doc: any) => doc.data())
    return FirestoreData.map((todo: TodoDTO) => new Todo(todo.id, todo.title, todo.age, todo.completed))
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
