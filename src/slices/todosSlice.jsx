import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTodos: [],
  currentTodos: [],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setAllTodos: (state, action) => {
      state.allTodos = action.payload
    },
    setCurrentTodos: (state, action) => {
      state.currentTodos = action.payload
    }
  }
})

export const { setAllTodos, setCurrentTodos } = todosSlice.actions
export default todosSlice.reducer