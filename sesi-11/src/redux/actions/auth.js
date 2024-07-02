import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "../reducers/authentication";

const setLoginLoading = (isLoading) => {
  return {
    type: LOGIN_LOADING,
    payload: isLoading
  };
};

const setLoginSuccess = (isSuccess) => {
  return {
    type: LOGIN_SUCCESS,
    payload: isSuccess
  };
};

const setLoginError = (message) => {
  return {
    type: LOGIN_ERROR,
    payload: message
  };
};

const callLoginApi = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isEmailPasswordMatch = email === 'admin@login.com' && password === 'admin'
      if (isEmailPasswordMatch) {
        resolve()
      } else {
        reject(new Error('Invalid email or password'))
      }
    }, 3000);
  })
}

export const login = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(setLoginLoading(true))
    dispatch(setLoginSuccess(false))
    dispatch(setLoginError(null))

    try {
      await callLoginApi({ email, password })
      dispatch(setLoginSuccess(true))
    } catch (error) {
      dispatch(setLoginError(error.message))
    } finally {
      dispatch(setLoginLoading(false))
    }
  }
}