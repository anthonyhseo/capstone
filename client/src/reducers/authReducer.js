import { LOGIN, SET_CURRENT_USER, LOGOUT } from '../actions/types'

const initialState = {
  isAuthenticated: false,
  username: ''
}
export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      const { username, id } = action.payload
      return {
        ...state,
        userId: id,
        username: username,
        isAuthenticated: true
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}
