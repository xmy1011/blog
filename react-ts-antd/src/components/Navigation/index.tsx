import React from 'react';
import style from  './style.module.less';
import avatar from '@/assets/avatar.jpg';
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Dropdown, Modal } from "antd";
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import store from "@/store";
import { clearUserInfo } from '@/store/actions/user';

const Navigation = () => {
  // todo
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)
  const { username } = useSelector((store: any) => {
    return store.user;
  });

  const handleLogout = () =>{
    Modal.confirm({
      content: '确定要退出登录吗？',
      okText: '确定',
      cancelText: '取消',
      onOk: (() => {
       store.dispatch(clearUserInfo());
       navigate('/login')
      })
    })
  }

  const items: MenuProps['items'] = [
    {
      label: <a>修改密码</a>,
      key: '0',
    },
    {
      label: <a onClick={handleLogout}>退出登录</a>,
      key: '1',
    }
  ];

  return (
    <div style={{
      boxShadow: '0 15px 30px rgba(0, 0, 0, .4)',
      background: '#17174c',
      height: '50px',
      minWidth: '1024px'
    }}>
      <div style={{
        display:'flex',
        justifyContent: 'space-between',
        border:'1px solid black',
        height: "inherit",
        padding: '0 8%'
      }}>
        <div className={style.navs}>
          <NavLink to={'/'} key={'/'}>首页</NavLink>
          <NavLink to={'/find'} key={'find'}>发现</NavLink>
          <NavLink to={'/notice'} key={'notice'}>关注</NavLink>
          <NavLink to={'/bigData'} key={'bigData'}>大数据可视化</NavLink>
        </div>
        <div>
          <span style={{color: '#fff', paddingRight: '8px'}}> {username}</span>
          <img src={avatar} className={style.avatar} />
          <Dropdown
            menu={{ items }}
            trigger={['click']}
          >
            <a onClick={e => e.preventDefault()}>
                <DownOutlined style={{color:'white', marginLeft: '8px'}} />
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
export default Navigation;
