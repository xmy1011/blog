import service from  './axiosEnhancer';

export function loginUser(data: any) {
  return service({
    url:'/login',
    method: 'post',
    data: {
      username: data?.userName,
      password: data?.userPwd,
    }
  })
}
