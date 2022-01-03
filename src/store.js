import { createStore } from "redux";
import rootReducer from "./reducer/index";
const initalState = {};
const store = createStore(rootReducer, initalState);

export default store;
