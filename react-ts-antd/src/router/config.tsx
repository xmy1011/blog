import Login from "@/views/Login";
import Home from "@/views/Home";
import NotFound from "@/components/404";
import  {  useRoutes } from 'react-router-dom'
import type { RouteObject} from 'react-router-dom';
import React from "react";
import { USER_ROLE_ENUM } from "../constants/user";

// 扩展 Route 定义
export interface RouteProps extends RouteObject {
  meta?: {
    auth?: boolean
    roles?: USER_ROLE_ENUM[]
    unRoles?: USER_ROLE_ENUM[]
  }
  children?: RouteProps[]
}

const routerCfg: RouteProps[] = [
  {
    path: '/',
    element: <Home />,
    meta: {
      auth: true,
      unRoles: [USER_ROLE_ENUM.ADMIN]
    }
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/404',
    element: <NotFound />,
  },
]

const Router = () => {
  let element = useRoutes(routerCfg);
  return element;
}

export default Router;