
import { useEffect, useState } from "react"
import { TodoContextProvider } from "./contexts/todoContext"
import TodoInputBox from "./components/TodoInputBox";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoList,setTodoList]=useState([]);
  const createTodo=(todoMsg)=>{
    const todo={todoMsg,id:Date.now(),isCompleted:false};
    setTodoList((prev)=>[todo,...prev]);
  }
  const updateTodo=(id,todoMsg)=>{
    setTodoList((prev)=>prev.map((todo)=>todo.id==id?{...todo,todoMsg:todoMsg}:todo))
  }
  const deleteTodo=(id)=>{
    setTodoList((prev)=>prev.filter((todo)=>todo.id!=id))
  }
  const markTodoAsCompleted=(id)=>{
    setTodoList((prev)=>prev.map((todo)=>todo.id==id?{...todo,isCompleted:!todo.isCompleted}:todo))
  }
  useEffect(()=>{
    const savedTodos=JSON.parse(localStorage.getItem("todos"))
    if(savedTodos && savedTodos.length>0){
      setTodoList(savedTodos)
    }
  },[])
  useEffect(()=>{localStorage.setItem("todos",JSON.stringify(todoList));
    
  },[todoList])
  
  
  return (
    <div className="h-screen bg-slate-800 flex flex-col items-center">
    <TodoContextProvider value={{todoList,createTodo,updateTodo,deleteTodo,markTodoAsCompleted}}>
      <TodoInputBox/>
      {todoList.map((todo)=><div className="w-2/4 my-1 rounded-lg" key={todo.id}><TodoItem todo={todo}/></div>)}  
    </TodoContextProvider>
    </div>
  )
}

export default App
