
const defaultState = {
  values: [],
  details: {}
}

export const GET_USERS = 'GET_USERS';
export const GET_USER_DETAILS = 'GET_USER_DETAILS';

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        values: action.payload
      }
    case GET_USER_DETAILS:
      return {
        ...state,
        details: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;