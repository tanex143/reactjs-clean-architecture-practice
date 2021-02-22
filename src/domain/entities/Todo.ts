export class Todo {
  id: number
  title: string
  age: number
  completed: boolean

  constructor(id: number, title: string, age: number, completed: boolean) {
    this.id = id
    this.title = title
    this.age = age
    this.completed = completed
  }
}
