import { LOGIN, LOGOUT } from './types'

export const loginUser = () => ({
  type: LOGIN
})

export const logoutUser = () => ({
  type: LOGOUT
})