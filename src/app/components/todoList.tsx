'use client'
import { useAppSelector } from "../store/hooks"
import { selectTodos, selectUndoneTodos } from "../store/todoSlice"
import TodoItem from "./todoItem"


export default function TodoList(){
    const todos = useAppSelector(selectTodos)
    const undoneTodos = useAppSelector(selectUndoneTodos)
    return (
        <>
            <div className="bg-todo-back mt-5 rounded shadow-xl">
                {
                    todos.map(todo => <TodoItem todoTitle={todo.title} todoDone = {todo.done} key={todo.title}/>)
                }
                
                <div className="px-4 font-Josefin flex items-center justify-between text-text-two py-3">
                    <div>
                        <p className="text-sm">{undoneTodos} items left</p>
                    </div>
                    <div className="space-x-3 font-bold text-sm">
                        <button className="text-Bright-Blue hover:text-hover">All</button>
                        <button className="hover:text-hover">Active</button>
                        <button className="hover:text-hover">Completed</button>
                    </div>
                    <div>
                        <button className="text-sm hover:text-hover">Clear Completed</button>
                    </div>
                </div>
            </div>
        </>
    )
}