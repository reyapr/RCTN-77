
const defaultState = {
  error: null,
  loading: false,
  success: false
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_LOADING = 'LOGIN_LOADING';

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: action.payload
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case LOGIN_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}

export default authReducer

