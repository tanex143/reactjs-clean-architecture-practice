import React, { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { Todo } from "../../redux/Todo/Todo.types"
import { addTodo } from "../../redux/Todo/Todo.actions"

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
        <div className="container mx-auto mb-5">
            <form onSubmit={submitHandler}>
                <div className="max-w-xl mx-auto relative">
                    <input
                        type="text"
                        className="py-2 w-full border-b-2 border-amber-300 focus:outline-none text-lg"
                        placeholder="What to do next. . ."
                        value={inputName}
                        onChange={inputChangeHandler}
                    />
                    <button
                        type="submit"
                        className="absolute top-0 right-0 py-2 px-6 text-lg rounded bg-yellow-400 text-white hover:bg-yellow-500"
                    >
                        ADD
                    </button>
                </div>
            </form>
        </div>
    )
}

export default InputForm
