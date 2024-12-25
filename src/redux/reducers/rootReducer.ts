import { combineReducers } from "redux";
import reducer from "./postReducer";
import store from "../store";

export const rootReducer = combineReducers({
  posts:reducer
})
export type RootState =  ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch