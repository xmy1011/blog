//@ts-nocheck
import Login from "@/views/Login";
import Home from "@/views/Home";
import BigData from '@/views/BigData';
import NotFound from "@/components/404";
import React from "react";
import { USER_ROLE_ENUM } from "../constants/user";
import {Outlet, RouteObject} from 'react-router-dom'

export interface RouteProps extends RouteObject {
  meta?: {
    auth?: boolean
    // roles和unRoles冲突的时候，冲突的部分以unRoles为准
    roles?: USER_ROLE_ENUM[] // 空数组代表没有谁可以访问
    unRoles?: USER_ROLE_ENUM[] // 空数组代表没有谁不可以访问
  }
  children?: RouteProps[]
}

export const routers: RouteProps[] = [
  {
    path: '/',
    element: <Home />,
    meta: {
      auth: true,
      unRoles: [USER_ROLE_ENUM.GUEST]
    },
  },
  {
    path: '/bigData',
    element: <BigData />,
    meta: {
      auth: true,
      unRoles: [USER_ROLE_ENUM.GUEST],
    }
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      auth: false,
      roles: [USER_ROLE_ENUM.GUEST]
    }

  },
  {
    path: '/404',
    element: <NotFound />,
  },
]
