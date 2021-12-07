import { combineReducers } from "redux";
import { authorization } from "./auth";

export const rootReducer = combineReducers({
  authorization
});

export default rootReducer;