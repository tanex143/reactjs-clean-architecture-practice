export class Todo {
    user_id: number
    id: number
    title: string
    completed: boolean

    constructor(user_id: number, id: number, title: string, completed: boolean) {
        this.user_id = user_id
        this.id = id
        this.title = title
        this.completed = completed
    }
}
