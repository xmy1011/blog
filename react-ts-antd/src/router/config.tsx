import Login from "@/views/Login";
import Home from "@/views/Home";
import NotFound from "@/components/404";
import { RouteObject, useRoutes } from 'react-router-dom'
import React from "react";

const routerCfg: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
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