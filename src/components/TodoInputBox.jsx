import React, { useContext } from 'react'
import { useState } from 'react'
import { TodoContext } from '../contexts/todoContext';

function TodoInputBox() {
  const [inputMsg, setInputMsg] = useState("");
  const { createTodo } = useContext(TodoContext)
  const hadleSubmit = (e) => {
    createTodo(inputMsg);
    setInputMsg("")
  }
  return (
    <div className="flex mt-4 w-2/4">
      <input type="text" className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5" value={inputMsg} onChange={(e) => setInputMsg(e.target.value)} />
      <button className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" onClick={hadleSubmit}>Add</button>
    </div>
  )
}

export default TodoInputBox