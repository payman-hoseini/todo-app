import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define a type for the slice state
interface TodoItem {
  title : string,
  done : boolean
}
interface TodoState {
  TodoList : TodoItem[]
}
// Define the initial state using that type
const initialState: TodoState = {
  TodoList: []
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
    },
    changeTodoState : (state,action) => {
      state.TodoList.map(todo => {
        if(todo.title == action.payload){
          todo.done = !todo.done
        }
      }
      )
    }
  }
})

export const { addTodo , changeTodoState } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state: RootState) => state.todos.TodoList

export default todoSlice.reducer