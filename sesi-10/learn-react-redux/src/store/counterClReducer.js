
const initialState = {
  value: 10
}

export const CL_INCREMENT = 'CL_INCREMENT'
export const CL_DECREMENT = 'CL_DECREMENT'
export const CL_RESET = 'CL_RESET'

const reducer = (state = initialState, action) => {
  const payload = action.payload || 1

  switch (action.type) {
    case CL_INCREMENT:
      return {
        ...state,
        value: state.value + payload,
      }
    case CL_DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }
    case CL_RESET:
      return {
        ...state,
        value: 0
      }
    default:
      return state
  }
}

export default reducer
