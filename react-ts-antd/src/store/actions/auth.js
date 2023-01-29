import { saveUserInfo } from "./user";
import { loginUser } from "@/services/user";

// export const login = (data) => (dispatch) => {
//   return new Promise((resolve, reject) => {
//
//   })
// }

export const register = (username, pwd) => (dispatch) => {
  console.log(username, pwd);
}

export const logout = () => (dispatch) => {
  console.log('logout')
}
