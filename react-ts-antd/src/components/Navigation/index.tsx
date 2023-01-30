import React from 'react';
import style from  './style.module.less';
import avatar from '@/assets/avatar.jpg';
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  // todo
  const location = useLocation();
  console.log(location)
  const { username } = useSelector((store: any) => {
    return store.user;
  });
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
        </div>
      </div>
    </div>
  )
}
export default Navigation;
