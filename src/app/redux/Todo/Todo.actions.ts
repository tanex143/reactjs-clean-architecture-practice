import {
    TODO_LOAD_SUCCESS,
    TODO_LOAD_REQUEST,
    TODO_LOAD_FAILURE,
    TODO_ADD,
    TODO_UPDATE,
    TODO_DELETE,
} from "./Todo.types"
import { TodoRepositoryImpl } from "./../../../data/repositories/TodoRepositoryImpl"
import { TodoServiceImpl } from "../../../domain/usecases/TodoService"

export const displayList = async (dispatch: any) => {
    dispatch({ type: TODO_LOAD_REQUEST })

    try {
        const todoRepo = new TodoRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        const todos = await todoService.GetTodos()
        dispatch({ type: TODO_LOAD_SUCCESS, payload: todos })
    } catch (error) {
        dispatch({ type: TODO_LOAD_FAILURE, error })
    }
}

export const addTodo = (data: any) => {
    const addRepo = new TodoRepositoryImpl()
    const addService = new TodoServiceImpl(addRepo)
    const add = addService.todoRepo.AddTodos(data)

    return {
        type: TODO_ADD,
        payload: add,
    }
}

export const deleteTodo = (id: number) => {
    const delRepo = new TodoRepositoryImpl()
    const delService = new TodoServiceImpl(delRepo)
    const del = delService.todoRepo.DeleteTodos({ id: id })

    return {
        type: TODO_DELETE,
        payload: del,
    }
}

export const UpdateTodo = (id: number, title: string) => {
    const editRepo = new TodoRepositoryImpl()
    const editService = new TodoServiceImpl(editRepo)
    const edit = editService.todoRepo.UpdateTodos({ id: id, title: title })

    return {
        type: TODO_UPDATE,
        payload: edit,
    }
}
