import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
// import {Provider} from 'react-redux';
import store from './store/store.js';
// import 'antd/dist/antd.css';  // 引入antd样式表
// ReactDom.render(
//     <Provider store={store}> <App/> </Provider>
//     , document.getElementById('app'));

    ReactDom.render(
        <App/>
        , document.getElementById('app'));