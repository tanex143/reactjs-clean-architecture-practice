import {
    TODO_LOAD_SUCCESS,
    TODO_LOAD_REQUEST,
    TODO_LOAD_FAILURE,
    TODO_ADD,
    TODO_UPDATE,
    TODO_DELETE,
} from "./Todo.types"

const todoInitState = {
    loading: false,
    todos: [
        {
            user_id: 0,
            id: 0,
            title: "",
            completed: false,
        },
    ],
}

const todos = (state = todoInitState, action: any) => {
    switch (action.type) {
        case TODO_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case TODO_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case TODO_LOAD_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                loading: false,
            }
        case TODO_ADD:
            return {
                ...state,
                todos: [action.payload, ...state.todos],
            }
        case TODO_DELETE:
            const tempTodo = state.todos.filter((f) => f.id !== action.payload)
            return {
                ...state,
                todos: tempTodo,
            }
        case TODO_UPDATE:
            const temp = [...state.todos]
            const index = temp.findIndex((f) => f.id === action.payload.id)
            const data = state.todos[index]
            data.title = action.payload.title
            return {
                ...state,
                todos: temp,
            }
        default:
            return state
    }
}

export default todos
