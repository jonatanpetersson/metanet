import { combineReducers } from "redux";
import { authorization } from "./auth";
import { models } from "./models";

export const rootReducer = combineReducers({
  authorization,
  models
});

export default rootReducer;