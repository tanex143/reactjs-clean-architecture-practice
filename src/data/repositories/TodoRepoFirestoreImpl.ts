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
    const FirestoreData = (await db.collection("todoList").get()).docs.map((doc: any) => doc.data())
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

    return this.GetTodos()
  }

  async DeleteTodos(data: Todo): Promise<any> {
    const JSONString = JSON.stringify(data.id)
    await db.collection("todoList").doc(JSONString).delete()

    return this.GetTodos()
  }

  async UpdateTodos(data: Todo): Promise<any> {
    const JSONString = JSON.stringify(data.id)
    await db.collection("todoList").doc(JSONString).update({ title: data.title })

    return this.GetTodos()
  }
}
