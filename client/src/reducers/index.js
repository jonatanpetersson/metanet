import { combineReducers } from "redux";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
  authReducer
});

export default rootReducer;