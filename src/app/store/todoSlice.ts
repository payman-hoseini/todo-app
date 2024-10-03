import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define a type for the slice state
interface TodoItem {
  title : string,
  done : boolean
}
interface TodoState {
  TodoList : TodoItem[]
  undoneTodos : number
}
// Define the initial state using that type
const initialState: TodoState = {
  TodoList: [],
  undoneTodos : 0
}

export const todoSlice = createSlice({
  name: 'todos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo : (state,action) => {
      state.TodoList.push({
        title : action.payload,
        done : false
      })
      state.undoneTodos++;
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
    },
  }
})

export const { addTodo , changeTodoState } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state: RootState) => state.todos.TodoList
export const selectUndoneTodos = (state: RootState) => state.todos.undoneTodos

export default todoSlice.reducer