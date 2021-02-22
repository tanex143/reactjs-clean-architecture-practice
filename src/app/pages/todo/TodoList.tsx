import React, { FC, useEffect, useState } from "react"
import { useDispatch, useSelector, connect } from "react-redux"
import { RootState } from "../../../App"
import { Todo } from "./../../../domain/entities/Todo"
import { displayList, UpdateTodo, deleteTodo } from "../../redux/Todo/Todo.actions"
import InputForm from "./InputForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons"
import Modal from "antd/lib/modal"

const TodoList: FC = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state: RootState) => state.todos.todos)
  const [editInput, setEditInput] = useState("")
  const [clickedID, setClickedID] = useState(0)
  const [modalCtrl, setModalCtrl] = useState(false)

  useEffect(() => {
    dispatch(displayList)
  }, [dispatch])

  const deleteHandler = (id: number) => {
    console.log(id)
    dispatch(deleteTodo(id))
  }

  const editSubmitHandler = (e: any, id: number) => {
    e.preventDefault()

    if (editInput.trim() === "") {
      return alert("Cannot proceed with blank todo. . .")
    }
    setModalCtrl(false)
    dispatch(UpdateTodo(id, editInput))
  }

  const passingDataClicked = (e: any, id: number, title: string) => {
    e.preventDefault()
    setClickedID(id)
    setEditInput(title)
    setModalCtrl(true)
  }

  return (
    <>
      <div className="container mx-auto overflow-x-hidden">
        <div className="text-center py-20">
          <h1 className="text-4xl tracking-wider">TANEX TODO LIST</h1>
        </div>
        <InputForm />
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto">
            {todos.map((todo: Todo) => (
              <div
                key={todo.id}
                className="py-3 px-2 my-3 rounded bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-300 flex flex-wrap justify-between"
              >
                <div className="h-full w-10/12">
                  <p className={`pointer my-auto text-lg break-words`}>{todo.title}</p>
                </div>
                <div className="">
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    onClick={(e) => passingDataClicked(e, todo.id, todo.title)}
                    className="text-lg mb-0.5 cursor-pointer hover:text-blue-500"
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-2xl mx-4 cursor-pointer hover:text-red-500"
                    onClick={() => deleteHandler(todo.id)}
                  />
                </div>
                {/* <!-- Modal --> */}
                <Modal
                  title="Edit Todo"
                  centered
                  visible={modalCtrl}
                  onOk={(e) => editSubmitHandler(e, clickedID)}
                  onCancel={() => setModalCtrl(false)}
                  maskClosable={false}
                  okText="Save"
                >
                  <textarea
                    placeholder="What to do next. . ."
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                    className="w-full py-3 rounded border focus:outline-none px-2 break-words"
                    cols={20}
                    rows={3}
                  />
                </Modal>
              </div>
            ))}
          </div>
        </div>
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
