import store from  '@/store'

/**
 * 这里本该是读取登录态
 * 我们直接写死 每次进来都是未登录
 */
// @ts-ignore
let isLogin = store.getState().user.isLogin;



export function useAuth() {

    return {
        isLogin
    }
}

