import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {Start} from "../reHook/start";
import ReactDOM from 'react-dom'
import model from "../model/main.js"
import App from '../components/app';
// import Dialog from './components/dialog';
import Pannel from '../components/taskpane';

import './index.less'

// const Wrapper = createPage({})(App);

ReactDOM.render((
  <Start model= {model}>
     <HashRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/taskpane" exact component={Pannel} />
      </Switch>
    </HashRouter>
  </Start>
), document.getElementById('app'));