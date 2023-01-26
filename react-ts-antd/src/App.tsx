import React, { useMemo } from 'react';
import { useRoutes } from "react-router-dom";
import { routers } from '@/router/config';
import {getRoutesByRole, RouterAuth} from "@/router";
import { useSelector } from "react-redux";
import { cloneDeep } from 'lodash';
function App() {
    // 当前用户角色
    // useSelector 只能在组件里面用
    const currentRole = useSelector((store: any) => {
        return store.user.role;
    })
    // 当前角色所拥有的路由权限
    const curRoutes = useMemo(() => {
        return getRoutesByRole(cloneDeep(routers))
    }, [currentRole]);
    // useRoute 只能在Router 组件中使用
    const Element = useRoutes(curRoutes);
    return (
      <RouterAuth> {Element} </RouterAuth>
    )
}

export default App;
