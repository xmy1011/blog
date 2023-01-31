import service from  './axiosEnhancer';


export function registerUser(data: any) {
  return service(({
    url:'/register',
    method: 'post',
    data
  }))
}

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

export function getTableData(params: any) {
  return service({
    url:'/queryTaskList',
    method: 'get',
    params
  })
}
