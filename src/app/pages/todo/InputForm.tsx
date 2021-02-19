import React, { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { Todo } from "./../../redux/Todo/Todo.types"
import { addTodo } from "./../../redux/Todo/Todo.actions"

const InputForm: FC = () => {
    const dispatch = useDispatch()
    const [inputName, setInputName] = useState("")

    const inputChangeHandler = (e: any) => {
        setInputName(e.target.value)
    }

    const submitHandler = (e: any) => {
        e.preventDefault()

        if (inputName.trim() === "") {
            return alert("Blank is not valid")
        }

        const newTitle: Todo = {
            userId: 1,
            id: Date.now(),
            title: inputName,
            completed: false,
        }

        dispatch(addTodo(newTitle))
        setInputName("")
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="What to do next. . ."
                    value={inputName}
                    onChange={inputChangeHandler}
                />
                <button type="submit" className="btn btn-outline-primary">
                    ADD
                </button>
            </div>
        </form>
    )
}

export default InputForm
