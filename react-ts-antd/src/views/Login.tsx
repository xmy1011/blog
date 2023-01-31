import React, { useState } from 'react';
import styles from './style/index.module.less';
import {Input, Button, Checkbox, message} from "antd";
import { saveUserInfo } from "@/store/actions";
import store from "@/store";
import { useNavigate } from "react-router-dom"
import { loginUser } from "@/services/user";
import { connect } from 'react-redux';
import { register } from "@/store/actions";

interface IProps{
  register: any,
}

interface UserInfo {
  userName: string;
  userPwd: string;
}


const Login = ({ register }: IProps) => {
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
    register(registerInfo.userName,registerInfo.userPwd).then(() =>{
      message.success('注册成功');
      setIsLogin(true);
    })
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginInput}>
        <div className={styles.header}>
              <div
                className={isLogin? styles.activeTitle : ''}
                onClick={() => {setIsLogin(true)}}>登录</div>
              <div
                className={isLogin? '' :styles.activeTitle}
                onClick={() => {setIsLogin(false)}}>注册</div>
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
              <Button
                className={styles.btn}
                type={'primary'}
                onClick={handleRegister}
                disabled={!(registerInfo.userPwd && registerInfo.userName)}
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

export default connect((state: any) => state.user, { register })(Login);
