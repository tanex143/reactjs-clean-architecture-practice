export const TODO_LOAD_REQUEST = "TODO_LOAD_REQUEST"
export const TODO_LOAD_SUCCESS = "TODO_LOAD_SUCCESS"
export const TODO_LOAD_FAILURE = "TODO_LOAD_FAILURE"
export const TODO_ADD = "TODO_ADD"
export const TODO_UPDATE = "TODO_UPDATE"
export const TODO_DELETE = "TODO_DELETE"
export const TODO_CANCEL = "TODO_CANCEL"

export type TodoProps = {
  todos: Todo[]
  dislayList: () => Todo[]
}

export interface ShowTodoList {
  type: typeof TODO_LOAD_SUCCESS
  payload: Todo[]
}

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export type TodoActionType = ShowTodoList
