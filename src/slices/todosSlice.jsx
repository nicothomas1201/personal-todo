import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTodos: JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [],
  currentTodos: [],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setAllTodos: (state, action) => {
      localStorage.setItem('todos', JSON.stringify(action.payload))
      state.allTodos = action.payload
    },
    setCurrentTodos: (state, action) => {
      state.currentTodos = action.payload
    }
  }
})

export const { setAllTodos, setCurrentTodos } = todosSlice.actions
export default todosSlice.reducer