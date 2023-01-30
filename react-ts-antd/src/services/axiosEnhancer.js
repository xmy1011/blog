import { message } from 'antd';
import axios from 'axios';
import store from  '@/store';


axios.defaults.headers['Content-Type'] = 'application/json';

// 创建 axios 实例

const service = axios.create({
    baseURL: '/api',
    timeout: 60 * 1000
})

// 请求拦截
service.interceptors.request.use(config => {
    const { user } = store.getState();
    console.log(user)
    if(user?.token){
        config.headers['Authorization'] = user.token;
    }
    return config;
}, error => {
    return Promise.reject(error);
} );

// 响应拦截
service.interceptors.response.use(
    response =>{
        // console.log(response.data); // {code: '', msg: '',data: {}}
        if(response.data.code === 401 || response.data.code === 403){
            console.log('退出登录');
            message.error('token失效，或长时间未登录，请重新登录');
        }
        return response.data;
}, error => {
        console.log(error);
        const { status } = error.response;
        if(status === 401 || status === 403) {
            message.error('token失效，或长时间未登录，请重新登录');
        } else  {
            message.error('网络异常，请稍后再试');
        }
        return Promise.reject(error);
    }
    )

export default  service;
