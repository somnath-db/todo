import { createContext} from "react"

export const TodoContext=createContext({
    todoList:[
    //     {
    //     todoMsg:"",
    //     id:1,
    //     isCompleted:false,
    // }
    ],
    createTodo:(todoMsg)=>{},
    updateTodo:(id,todoMsg)=>{},
    deleteTodo:(id)=>{},
    markTodoAsCompleted:(id)=>{}
});

export const TodoContextProvider=TodoContext.Provider;