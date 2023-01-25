import { saveUserInfo, clearUserInfo } from "./user";

export const login = (username, pwd) => (dispatch) => {
  console.log(username, pwd);
}

export const register = (username, pwd) => (dispatch) => {
  console.log(username, pwd);
}

export const logout = () => (dispatch) => {
  console.log('logout')
}