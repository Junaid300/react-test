import { combineReducers } from "redux";
import { testReducer } from "./test";

export default combineReducers({
  test: testReducer,
});
