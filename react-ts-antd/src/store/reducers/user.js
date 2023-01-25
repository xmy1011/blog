import { act } from 'react-dom/test-utils';
import * as types from '../actionTypes';

const initUserInfo = {
  data: {},
  isLogined: false,
}

export default function user(state=initUserInfo, action) {
  switch(action.type){
    case types.SET_USER_INFO:
      return {
        ...state,
        data: action.data,
        isLogined: true
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