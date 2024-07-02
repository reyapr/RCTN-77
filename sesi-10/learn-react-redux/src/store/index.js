/* eslint-disable no-case-declarations */
import { combineReducers, createStore } from "redux";
import counterFnReducer from "./counterFnReducer";
import counterClReducer from "./counterClReducer";

const reducers = combineReducers({
  counterFn: counterFnReducer,
  counter: counterClReducer
});

const store = createStore(reducers);

export default store;