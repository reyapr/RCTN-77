
const initialState = {
  title: 'Learn Redux',
  subTitle: 'Counter',
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + action.payload
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

const incrementAction = (payload) => {
  return {
    type: 'INCREMENT',
    payload
  }
}

const decrementAction = {
  type: 'DECREMENT'
}

const store = Redux.createStore(reducer);
const state = store.getState();

const titleEle = document.getElementById('title');
const subTitleEle = document.getElementById('sub-title')
const counterEle = document.getElementById('counter')

const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')

titleEle.innerHTML = state.title
subTitleEle.innerHTML = state.subTitle
counterEle.innerHTML = state.counter

incrementBtn.addEventListener('click', () => {
  store.dispatch(incrementAction(3))
})

decrementBtn.addEventListener('click', () => {
  store.dispatch(decrementAction)
})

store.subscribe(() => {
  counterEle.innerHTML = store.getState().counter
})


