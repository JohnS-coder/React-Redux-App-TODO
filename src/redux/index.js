import { combineReducers } from "redux";
import todoReducer from "./reducer/reducer";

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
