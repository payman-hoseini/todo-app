'use client'

import { useAppDispatch } from "../store/hooks";
import { changeTodoState, deleteTodo } from "../store/todoSlice";

export default function TodoItem({todoTitle , todoDone} : {todoTitle : string , todoDone : boolean}) {
    const dispatch = useAppDispatch()
    function changeStateHandler(){
        dispatch(changeTodoState(todoTitle))
    }
    function deleteTodoHandler(){
        dispatch(deleteTodo(todoTitle))
    }
  return (
    <ul>
      <li className="border-b border-b-text-one py-4">
        <div className="flex items-center justify-between px-5 hover:cursor-pointer group">
          <div className="flex items-center">
            <button onClick={changeStateHandler} className={`${todoDone ? "w-6 h-6 bg-gradient-to-t from-grad1 to-grad2 border border-text-one  hover:border-none rounded-full" : "w-6 h-6 bg-todo-back border border-text-one hover:bg-gradient-to-t from-grad1 to-grad2 hover:border-none rounded-full"}`}>
              <p className={`${todoDone ? "checked w-[22px] h-[22px] rounded-full mx-auto bg-gradient-to-br from-grad1 to-grad2" : "w-[22px] h-[22px] bg-todo-back rounded-full mx-auto"}`}></p>
            </button>
            <p className="font-Josefin ml-5 text-todo">{todoTitle}</p>
          </div>
          <button onClick={deleteTodoHandler} className="hidden group-hover:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <path
                fill="#494C6B"
                fillRule="evenodd"
                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
              />
            </svg>
          </button>
        </div>
      </li>
    </ul>
  );
}
