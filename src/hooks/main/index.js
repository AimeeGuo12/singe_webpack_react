import React from 'react';
import ReactDOM from 'react-dom';
import { Start } from '../reHooks';
import App from '../container/index';
import model from '../model/model';
ReactDOM.render((
    <Start model = {model}>
        <App/> 
    </Start>
)
,document.getElementById('app'))