import axios from "axios"
import { GET_USERS, GET_USER_DETAILS } from "../reducers/user"

export const getUsers = () => {
  return async (dispatch) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")

    dispatch({
      type: GET_USERS,
      payload: response.data
    })
  }
}

export const getUserDetails = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

    dispatch({
      type: GET_USER_DETAILS,
      payload: response.data
    })
  }
}