import { createStore } from 'redux'

const initialState = {
  title: 'Learn Redux',
  counter: 0,
}


// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}


// STORE
let store = createStore(reducer)
store.subscribe(() => {
  console.log(store.getState());
})


// ACTION
const counterPlus = {
  type: 'INCREMENT'
}

const counterMinus = {
  type: 'DECREMENT'
}


// DISPACTH ACTION
store.dispatch(counterPlus)
store.dispatch(counterPlus)
store.dispatch(counterPlus)
store.dispatch(counterMinus)
