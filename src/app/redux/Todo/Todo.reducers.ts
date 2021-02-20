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
  todos: [],
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
        todos: action.payload,
      }
    case TODO_DELETE:
      return {
        ...state,
        todos: action.payload,
      }
    case TODO_UPDATE:
      return {
        ...state,
        todos: action.payload,
      }
    default:
      return state
  }
}

export default todos
