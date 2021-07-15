import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
import {Provider} from 'react-redux';
// import store from './react/03react-redux/store/store';
import store from './react/04react-router/work/store/index';

// import 'antd/dist/antd.css';  // 引入antd样式表
ReactDom.render(
    <Provider store={store}> <App/> </Provider>
    , document.getElementById('app'));

    // ReactDom.render(
    //     <App/>
    //     , document.getElementById('app'));