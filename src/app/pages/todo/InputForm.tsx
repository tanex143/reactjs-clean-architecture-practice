import React, { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { Todo } from "../../redux/Todo/Todo.types"
import { addTodo } from "../../redux/Todo/Todo.actions"

const InputForm: FC = () => {
  const dispatch = useDispatch()
  const [inputTitle, setInputTitle] = useState("")
  const [inputAge, setInputAge] = useState(Number)

  const submitHandler = (e: any) => {
    e.preventDefault()

    if (inputTitle.trim() === "") {
      return alert("Blank is not valid")
    }

    const newTitle = {
      id: Date.now(),
      title: inputTitle,
      age: inputAge,
      completed: false,
    }

    dispatch(addTodo(newTitle))
    setInputTitle("")
    setInputAge(0)
  }

  return (
    <div className="container mx-auto mb-5">
      <form onSubmit={submitHandler}>
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            className="py-2 w-full border-b-2 border-amber-300 focus:outline-none text-lg"
            placeholder="What to do next. . ."
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
          <p>Works to do</p>
          <input
            type="text"
            className="py-2 mt-2 w-full border-b-2 border-amber-300 focus:outline-none text-lg"
            placeholder="Your age. . ."
            value={inputAge}
            onChange={(e) => setInputAge(parseInt(e.target.value, 10))}
          />
          <p>Your Age</p>
          <button
            type="submit"
            className="py-2 w-full my-2 text-lg rounded bg-yellow-400 text-white hover:bg-yellow-500 focus:outline-none"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  )
}

export default InputForm
