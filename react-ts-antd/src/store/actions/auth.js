import { saveUserInfo } from "./user";
import { registerUser } from "@/services/user";

export const register = (username, password) => (dispatch) => {
    return new Promise((resolve, reject) => {
        registerUser({ username: username.trim(), password: password })
            .then(res => {
                console.log('注册===', res)
                if (res.code === 0) {
                    // dispatch(saveUserInfo(res.data));
                    console.log(res, '=============')
                    resolve(res);
                } else {
                    reject(res.msg);
                }
            })
    })
}

export const logout = () => (dispatch) => {
}
