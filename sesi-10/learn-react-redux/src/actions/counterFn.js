import { FN_INCREMENT, FN_DECREMENT, FN_RESET } from "../store/counterFnReducer";

export const increment = (payload) => {
  return {
    type: FN_INCREMENT,
    payload
  }
}

export const decrement = () => ({
  type: FN_DECREMENT,
})

export const reset = () => ({
  type: FN_RESET,
})
