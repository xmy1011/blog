import React, { useState } from 'react';
import styles from './style/index.module.less';
import { Input, Button,  Checkbox} from "antd";
import { saveUserInfo } from "@/store/actions";
import store from "@/store";
import { useNavigate } from "react-router-dom"
import {loginUser} from "@/services/user";

interface UserInfo {
  userName: string;
  userPwd: string;
  userPwd2?: string;
}


const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loginInfo,setLoginInfo] = useState<UserInfo>({userName: '', userPwd: ''});
  const [registerInfo, setRegisterInfo] = useState<UserInfo>({userName: '', userPwd: ''});


  const handleLogin = () => {
    loginUser(loginInfo).then((res) =>{
      // @ts-ignore
      if(res.code === 0){
        store.dispatch(saveUserInfo(res.data));
        navigate('/', {replace: true})
      } else {
        console.log('err')
      }
    })

  }

  const handleRegister = () => {

  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginInput}>
        <div className={styles.header}>
              <span tabIndex={1} onClick={() => {setIsLogin(true)}}>注册</span>
              <span tabIndex={2} onClick={() => {setIsLogin(false)}}>登录</span>
          </div>
        {
          isLogin ? (
            <div className={styles.inputLogin}>
              <Input
                className = 'input'
                placeholder={'请输入账户名'}
                value={loginInfo.userName}
                onChange={(e) => {
                  setLoginInfo({
                    ...loginInfo,
                    userName: e.target.value
                  })
                }}
              />
              <Input
                placeholder={'请输入密码'}
                value={loginInfo.userPwd}
                onChange={(e) => {
                  setLoginInfo({
                    ...loginInfo,
                    userPwd: e.target.value
                  })
                }}
              />
              <Button
                className={styles.btn}
                type={'primary'}
                onClick={handleLogin}
                disabled={!(loginInfo.userPwd && loginInfo.userName)}
              >立即登录</Button>
            </div>
          ) : (
            <div className={styles.inputLogin}>
              <Input
                placeholder={'请输入注册邮箱/手机号'}
                value={registerInfo.userName}
                onChange={(e) => {
                  setRegisterInfo({
                    ...registerInfo,
                    userName: e.target.value
                  })
                }}
              />
              <Input
                placeholder={'请输入密码'}
                value={registerInfo.userPwd}
                onChange={(e) => {
                  setRegisterInfo({
                    ...registerInfo,
                    userPwd: e.target.value
                  })
                }}
              />
              <Input
                placeholder={'请再次确认密码'}
                value={registerInfo.userPwd2}
                onChange={(e) => {
                  setRegisterInfo({
                    ...registerInfo,
                    userPwd2: e.target.value
                  })
                }}
              />
              <Button
                className={styles.btn}
                type={'primary'}
                onClick={handleRegister}
                disabled={!(registerInfo.userPwd && registerInfo.userName && registerInfo.userPwd2)}
              >立即注册</Button>
            </div>
          )
        }
        {
          isLogin && (
            <div style={{
              marginTop: '12px',
              display: 'flex',
              justifyContent: 'space-around'
            }}>
              <Checkbox> 记住我</Checkbox>
              <Button type={'link'}>忘记密码</Button>
            </div>
          )
        }
      </div>

    </div>
  )
}

export default Login;
