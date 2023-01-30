import * as types from '../actionTypes';
import { initState } from  '../user';
import { USER_ROLE_ENUM } from "@/constants/user";

export default function user(state=initState, action) {
  switch(action.type){
    case types.SET_USER_INFO:
      return {
        ...state,
        userId: action.data?.userData?.id,
        username: action.data?.userData?.username,
        role: USER_ROLE_ENUM.INTERN,
        token: action.data?.token,
        isLogin: true,
      };
    default:
      return state;
  }
}
