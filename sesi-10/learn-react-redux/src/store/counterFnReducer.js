
const initialState = {
  value: 20
}

export const FN_INCREMENT = 'FN_INCREMENT'
export const FN_DECREMENT = 'FN_DECREMENT'
export const FN_RESET = 'FN_RESET'

const reducer = (state = initialState, action) => {
  const payload = action.payload || 1

  switch (action.type) {
    case FN_INCREMENT:
      return {
        ...state,
        value: state.value + payload,
      }
    case FN_DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }
    case FN_RESET:
      return {
        ...state,
        value: 0
      }
    default:
      return state
  }
}

export default reducer
