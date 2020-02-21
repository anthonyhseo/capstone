import { LOGIN, SET_CURRENT_USER, LOGOUT } from './types'

export const loginUser = user => ({
  payload: user,
  type: LOGIN
})

export const logoutUser = () => {
  localStorage.removeItem('jwtToken')

  return {
    type: LOGOUT
  }
}
