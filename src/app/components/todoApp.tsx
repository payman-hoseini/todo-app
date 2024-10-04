'use client'

import React, { useState } from "react"
import TodoList from "./todoList"
import { useAppDispatch } from "../store/hooks"
import { addTodo } from "../store/todoSlice"

export default function TodoApp (){
    const [theme , setTheme] = useState("dark")
    function changeThemeHandler (){
        theme == "dark" ? setTheme("light") : setTheme("dark")
    }

    const dispatch = useAppDispatch()
    const [todoTitle , setTodoTitle] = useState("")
    function addNewTodoHandler(e : React.KeyboardEvent<HTMLInputElement>) {
        if(todoTitle != "" && e.key == "Enter"){
          dispatch(addTodo(todoTitle))
        }
    }
    function setTodoTitleHandler (e : React.ChangeEvent<HTMLInputElement>){
      setTodoTitle(e.target.value)
    }
    return(
      <main className={`${theme} w-screen h-screen bg-background`}>
          <div className="max-w-[1440px] mx-auto backgroundDes">
            <div className="md:w-[40%] w-[90%] mx-auto py-16">
              <div className="flex justify-between">
                  <h1 className="text-white font-Josefin font-bold tracking-[1rem] text-4xl">TODO</h1>
                  <button onClick={changeThemeHandler}>
                    {
                        theme == "dark"
                        ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
                    }
                  </button>
              </div>
              <div className="bg-todo-back flex items-center px-5 py-4 rounded shadow-xl mt-8">
                  <div className="w-6 h-6 border border-text-one rounded-full"></div>
                  <input onChange={setTodoTitleHandler} onKeyDown={addNewTodoHandler} type="text" placeholder="Create a new todo..." className="bg-todo-back ml-5 font-Josefin outline-none"/>
              </div>
              <TodoList />
            </div>
          </div>
      </main>
    )
}