 /* 描述: 路由组件
 *  作者: Jack Chen
 *  日期: 2020-08-01
 */

import * as React from 'react';
import { BrowserRouter } from "react-router-dom";
import RoutesComp from './router/index';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <RoutesComp></RoutesComp>
      </BrowserRouter>
    )
  }
}

export default App;
