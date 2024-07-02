import { combineReducers, createStore } from "redux";
import counterReducer from "../reducers/counter";

const reducers = combineReducers({
  counter: counterReducer,
  user: () => ({ user: 'udin' })
});

const store = createStore(reducers);

export default store;
