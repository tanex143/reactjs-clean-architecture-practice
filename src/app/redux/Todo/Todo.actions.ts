import {
    TODO_LOAD_SUCCESS,
    TODO_LOAD_REQUEST,
    TODO_LOAD_FAILURE,
    TODO_ADD,
    TODO_UPDATE,
    TODO_DELETE,
    Todo,
    TodoActionType,
    TODO_CANCEL,
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
    const add = addService.todoRepo.AddTodo(data)

    return {
        type: TODO_ADD,
        payload: add,
    }
}

export const updateTodo = (id: number, title: string): TodoActionType => {
    return {
        type: TODO_UPDATE,
        payload: {
            id,
            title,
        },
    }
}

export const deleteTodo = (id: number): TodoActionType => {
    console.log(id)
    return {
        type: TODO_DELETE,
        payload: id,
    }
}

export const setCancelEdit = (id: number): TodoActionType => {
    return {
        type: TODO_CANCEL,
        payload: id,
    }
}
