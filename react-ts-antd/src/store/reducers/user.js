import * as types from '../actionTypes';
import { initState } from  '../user';


export default function user(state=initState, action) {
  switch(action.type){
    case types.SET_USER_INFO:
      return {
        ...state,
        ...action.data,
        isLogin: true,
      };
    case types.MODIFY_USER_INFO:
        return {
          ...state,
          data: Object.assign(state.data, action.data)
        }
    case types.CLEAR_USER_INFO:
      return {
        data: {},
        isLogined: false,
      }
    default:
      return state;
  }
}
