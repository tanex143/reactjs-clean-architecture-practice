import {
  TODO_LOAD_SUCCESS,
  TODO_LOAD_REQUEST,
  TODO_LOAD_FAILURE,
  TODO_ADD,
  TODO_UPDATE,
  TODO_DELETE,
} from "./Todo.types"
import { TodoServiceImpl } from "../../../domain/usecases/TodoService"
import { TodoRepoFirestoreImpl } from "./../../../data/repositories/TodoRepoFirestoreImpl"
import { Dispatch } from "redux"

export const displayList = async (dispatch: any) => {
  dispatch({ type: TODO_LOAD_REQUEST })

  try {
    const todoRepo = new TodoRepoFirestoreImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    const todos = await todoService.GetTodos()
    dispatch({ type: TODO_LOAD_SUCCESS, payload: todos })
  } catch (error) {
    dispatch({ type: TODO_LOAD_FAILURE, error })
  }
}

export const addTodo = (data: any) => async (dispatch: Dispatch) => {
  const addRepo = new TodoRepoFirestoreImpl()
  const addService = new TodoServiceImpl(addRepo)
  const add = await addService.AddTodos(data)
  console.log("from actions", add)

  dispatch({ type: TODO_ADD, payload: add })
}

export const deleteTodo = (id: number) => async (dispatch: Dispatch) => {
  const delRepo = new TodoRepoFirestoreImpl()
  const delService = new TodoServiceImpl(delRepo)
  const del = await delService.DeleteTodos({ id: id })

  dispatch({ type: TODO_DELETE, payload: del })
}

export const UpdateTodo = (id: number, title: string) => {
  const editRepo = new TodoRepoFirestoreImpl()
  const editService = new TodoServiceImpl(editRepo)
  const edit = editService.UpdateTodos({ id: id, title: title })

  return {
    type: TODO_UPDATE,
    payload: edit,
  }
}
