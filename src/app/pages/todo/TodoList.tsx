import React, { FC, useEffect, useState } from "react"
import { useDispatch, useSelector, connect } from "react-redux"
import { RootState } from "../../../App"
import { Todo } from "./../../redux/Todo/Todo.types"
import { displayList, updateTodo, deleteTodo, setCancelEdit } from "../../redux/Todo/Todo.actions"
import InputForm from "./InputForm"

const TodoList: FC = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state: RootState) => state.todos.todos)
    const [editInput, setEditInput] = useState("")
    const [clickedID, setClickedID] = useState(0)

    useEffect(() => {
        dispatch(displayList)
    }, [dispatch])

    const deleteHandler = (id: number) => {
        dispatch(deleteTodo(id))
    }

    const editSubmitHandler = (e: any, id: number) => {
        e.preventDefault()

        if (editInput.trim() === "") {
            return alert("Cannot proceed with blank todo. . .")
        }

        dispatch(updateTodo(id, editInput))
    }

    const editCancelHandler = (e: any) => {
        e.preventDefault()

        dispatch(setCancelEdit)
    }

    const passingDataClicked = (e: any, id: number, title: string) => {
        e.preventDefault()
        setClickedID(id)
        setEditInput(title)
    }

    return (
        <>
            <div className="mx-5">
                <div className="text-center py-5">
                    <h1>TODO LIST</h1>
                </div>
                <InputForm />
                <ul className="list-group mt-2">
                    {todos.map((todo: Todo) => (
                        <div key={todo.id}>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <p
                                    className="pointer"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-modal"
                                    onClick={(e) => passingDataClicked(e, todo.id, todo.title)}
                                >
                                    {todo.title}
                                </p>
                                <span
                                    className="badge bg-danger rounded-pill text-white pointer"
                                    onClick={() => deleteHandler(todo.id)}
                                >
                                    X
                                </span>
                            </li>

                            {/* <!-- Modal --> */}
                            <div
                                className="modal fade"
                                id="edit-modal"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Edit</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                                X
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <input
                                                type="text"
                                                placeholder="What to do next. . ."
                                                value={editInput}
                                                onChange={(e) => setEditInput(e.target.value)}
                                                className="w-100"
                                            />
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-outline-success"
                                                data-bs-dismiss="modal"
                                                onClick={(e) => editSubmitHandler(e, clickedID)}
                                            >
                                                Save
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                data-bs-dismiss="modal"
                                                onClick={editCancelHandler}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    )
}

const mapStateToProps = (state: RootState) => {
    console.log(state.todos)
    return {
        todos: state.todos.todos,
    }
}

export default connect(mapStateToProps)(TodoList)
