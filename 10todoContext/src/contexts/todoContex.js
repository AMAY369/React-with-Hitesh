/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

const TodoContext = createContext(
  {
    todos: [
      {
        id: 1,
        todo: "Learn Backend",
        isCompleted: false
      }
    ],
    addTodo: (todo)=>{},
    removeTodo: (id)=>{},
    updateTodo: (id, todo)=>{},
    changeState: (id)=>{}
  }
);

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{
  return useContext(TodoContext);
}