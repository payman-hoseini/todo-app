'use client'
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { selectActiveTodos, selectCompletedTodos, selectTodos, selectUndoneTodos, showActivelist, showCompletedlist } from "../store/todoSlice"
import TodoItem from "./todoItem"


export default function TodoList(){
    const allTodos = useAppSelector(selectTodos)
    const activeTodos = useAppSelector(selectActiveTodos)
    const completedTodos = useAppSelector(selectCompletedTodos)
    const undoneTodos = useAppSelector(selectUndoneTodos)

    const dispatch = useAppDispatch()
    const [allFlag , setAllFlag] = useState(true)
    const [activeFlag , setActiveFlag] = useState(false)
    const [completedFlag , setCompletedFlag] = useState(false)


    return (
        <>
            <div className="bg-todo-back mt-5 rounded shadow-xl">
                {
                   allFlag && allTodos.map(todo => <TodoItem todoTitle={todo.title} todoDone = {todo.done} key={todo.title}/>)
                }
                {
                    activeFlag && activeTodos.map(todo => <TodoItem todoTitle={todo.title} todoDone = {todo.done} key={todo.title}/>)
                }
                {
                    completedFlag && completedTodos.map(todo => <TodoItem todoTitle={todo.title} todoDone = {todo.done} key={todo.title}/>)
                }
                <div className="px-4 font-Josefin flex items-center justify-between text-text-two py-3">
                    <div>
                        <p className="text-sm">{undoneTodos} items left</p>
                    </div>
                    <div className="space-x-3 font-bold text-sm">
                        <button onClick={() => {setAllFlag(true); setActiveFlag(false); setCompletedFlag(false)}} className={`${allFlag  ?  "text-Bright-Blue hover:text-hover" : "hover:text-hover"}`}>All</button>
                        <button onClick={() => {dispatch(showActivelist()); setAllFlag(false); setActiveFlag(true); setCompletedFlag(false)}} className={`${activeFlag  ?  "text-Bright-Blue hover:text-hover" : "hover:text-hover"}`}>Active</button>
                        <button onClick={() => {dispatch(showCompletedlist()); setAllFlag(false); setActiveFlag(false); setCompletedFlag(true)}} className={`${completedFlag  ?  "text-Bright-Blue hover:text-hover" : "hover:text-hover"}`}>Completed</button>
                    </div>
                    <div>
                        <button className="text-sm hover:text-hover">Clear Completed</button>
                    </div>
                </div>
            </div>
        </>
    )
}