import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define a type for the slice state
interface TodoItem {
  title : string,
  done : boolean
}
interface TodoState {
  TodoList : TodoItem[]
  Activelist : TodoItem[]
  CompletedList : TodoItem[]
  undoneTodos : number
}
// Define the initial state using that type
const initialState: TodoState = {
  TodoList: [],
  Activelist : [],
  CompletedList : [],
  undoneTodos : 0
}

export const todoSlice = createSlice({
  name: 'todos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo : (state,action) => {
      if(state.TodoList.length == 0){
        state.TodoList.push({
          title : action.payload,
          done : false
        })
        state.undoneTodos++;
      }
      else{
        let flag = false;
        state.TodoList.map(todo => {
          if(todo.title == action.payload){
            flag = true
          }
        })
        if(!flag){
          state.TodoList.push({
            title : action.payload,
            done : false
          })
          state.undoneTodos++;
        }
      }
    },
    deleteTodo : (state , action) => {
      state.TodoList = state.TodoList.filter(todo => {
        if(todo.title != action.payload)
          return todo
        if(todo.title == action.payload){
          if(todo.done == false)
            state.undoneTodos--
        }
      })
    },
    changeTodoState : (state,action) => {
      state.TodoList.map(todo => {
        if(todo.title == action.payload){
          if(todo.done == false){
            todo.done = true;
            state.undoneTodos--;
          }
          else {
            todo.done = false;
            state.undoneTodos++;
          }
        }
      }
      )
      state.Activelist.map(todo => {
        if(todo.title == action.payload){
          if(todo.done == false){
            todo.done = true;
          }
          else {
            todo.done = false;
          }
        }
      }
      )
      state.CompletedList.map(todo => {
        if(todo.title == action.payload){
          if(todo.done == false){
            todo.done = true;
          }
          else {
            todo.done = false;
          }
        }
      }
      )
    },
    showActivelist : (state) => {
      state.Activelist = state.TodoList.filter(todo => {
        if(todo.done == false)
          return todo
      }
      )
    },
    showCompletedlist : (state) => {
      state.CompletedList = state.TodoList.filter(todo => {
        if(todo.done == true)
          return todo
      }
      )
    },
    clearCompletedTodos : (state) => {
      state.TodoList = state.TodoList.filter(todo => {
        if(todo.done == false)
          return todo
      })
    }

  }
})

export const { addTodo , changeTodoState , showActivelist , showCompletedlist , clearCompletedTodos , deleteTodo } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state: RootState) => state.todos.TodoList
export const selectUndoneTodos = (state: RootState) => state.todos.undoneTodos
export const selectActiveTodos = (state: RootState) => state.todos.Activelist
export const selectCompletedTodos = (state: RootState) => state.todos.CompletedList


export default todoSlice.reducer