import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerList: [
    {
      name: 'All',
      class: 'active'
    }, 
    {
      name: 'Active'
    },
    {
      name: 'Completed'
    }
  ]
}

const headerListSlice = createSlice({
  name: 'headerList',
  initialState,
  reducers: {
    setHeaderList: (state, action) => {
      state.headerList = action.payload
    }
  }
})

export const { setHeaderList } = headerListSlice.actions
export default headerListSlice.reducer