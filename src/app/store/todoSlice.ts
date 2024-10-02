import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define a type for the slice state


// Define the initial state using that type
// const initialState: CounterState = {
//   value: 0
// }

export const todoSlice = createSlice({
  name: 'todos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  }
})

export const {  } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default todoSlice.reducer