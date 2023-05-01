import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentView: 'all'
}

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setCurrentView: (state, action) => {
      state.currentView = action.payload
    }
  }
})

export const { setCurrentView } = viewSlice.actions
export default viewSlice.reducer
