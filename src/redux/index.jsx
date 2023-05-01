import { combineReducers } from "redux";
import inputSlice from "../slices/inputSlice";
import todosSlice from "../slices/todosSlice";
import viewSlice from "../slices/viewSlice";
import headerListSlice from "../slices/headerListSlice";

const rootReducer = combineReducers({
  input: inputSlice,
  todos: todosSlice,
  view: viewSlice,
  headerList: headerListSlice
})

export default rootReducer