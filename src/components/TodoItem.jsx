import React,{useContext, useState,useRef} from 'react'
import { TodoContext } from '../contexts/todoContext'

function TodoItem({todo}) {
    const [todoContent,setTodoContent]=useState(todo.todoMsg)
    const [editable,setEditable]=useState(false)

    const {markTodoAsCompleted,deleteTodo,updateTodo}=useContext(TodoContext)

    const inputRef = useRef(null);

    const handleCheckBox=()=>{
        markTodoAsCompleted(todo.id);
    }
    const handleDelete=()=>{
        deleteTodo(todo.id)
    }
    const handleContentChange=(e)=>{
        setTodoContent(e.target.value)
    }
    const handleUpdate=()=>{ 
        updateTodo(todo.id,todoContent);
        setEditable(!editable)   
    }
    const handleFocus = () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      };
    
  return (
        <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
            todo.isCompleted ? "bg-[#dec3bb]" : "bg-[#c9aae0]"
        }`} >
            <input type="checkbox" checked={todo.isCompleted} onChange={handleCheckBox}></input>
            <input ref={inputRef} type='text' value={todoContent} onChange={handleContentChange} readOnly={!editable} className={`border outline-none w-full bg-transparent rounded-lg ${
                    editable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.isCompleted ? "line-through" : ""}`}/>
            {!editable &&<button className={`bg-yellow-100 rounded-lg p-1 ${todo.isCompleted?"bg-slate-200 hover:cursor-not-allowed":""}`} onClick={(e)=>{e.stopPropagation();setEditable(!editable);handleFocus();}} disabled={todo.isCompleted}>✏️</button>}
            {!todo.isCompleted && editable &&<button className="bg-green-700 rounded-lg p-1" onClick={handleUpdate}>📁</button>}
            <button className="bg-red-300 rounded-lg p-1" onClick={handleDelete}>❌</button>
        </div>
    )
  
}

export default TodoItem