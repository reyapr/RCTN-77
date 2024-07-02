import { CL_DECREMENT, CL_INCREMENT, CL_RESET } from "../store/counterClReducer"

export const increment = (payload) => {
  return {
    type: CL_INCREMENT,
    payload
  }
}

export const decrement = () => ({
  type: CL_DECREMENT,
})

export const reset = () => ({
  type: CL_RESET,
})
