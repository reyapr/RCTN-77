import counterReducer from "../reducers/counter";
import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import userReducer from "../reducers/user";
import authReducer from "../reducers/authentication";

// const reducers = combineReducers({
//   counter: counterReducer,
//   user: () => ({ user: 'udin' })
// });

// const store = createStore(reducers);

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;
