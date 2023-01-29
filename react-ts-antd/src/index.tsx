 /* 描述: 主文件入口
 *  作者: Jack Chen
 *  日期: 2020-08-01
 */

import * as React from 'react';
import { createRoot } from 'react-dom/client'
import 'antd/dist/antd.less';
import './global.less';
import App from './App';
import store, { persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter } from "react-router-dom";

 export const root = document.getElementById('root')
 root &&
 createRoot(root).render(
  <Provider store={ store }>
    <PersistGate persistor={ persistor }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </PersistGate>
  </Provider>
);
