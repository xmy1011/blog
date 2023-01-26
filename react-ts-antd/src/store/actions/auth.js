import { saveUserInfo } from "./user";
import {USER_ROLE_ENUM} from "@/constants/user";

export const login = (username, pwd) => (dispatch) => {
  console.log(username, pwd);
  return new Promise((resolve, reject) => {
     dispatch(saveUserInfo({
       role: USER_ROLE_ENUM.INTERN,
       name: 'xmy',
       phone: '1234',
       userId: '001',
       isLogin: true,
     }));
     resolve();
  })
}

export const register = (username, pwd) => (dispatch) => {
  console.log(username, pwd);
}

export const logout = () => (dispatch) => {
  console.log('logout')
}
