import React from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "./g-react-router-dom/index";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./pages/PrivateRoute";
import ModalSwitch from './pages/ModalSwitch';
import {useParams, useLocation, useHistory} from "./g-react-router-dom/hooks";
import './index.css';
function AppPage() {
    return (
        <div className="App">
            <Router
            // getUserConfirmation: func
            // 作用：导航到此页面前执行的函数，默认使用 window.confirm
            // 使用场景：当需要用户进入页面前执行什么操作时可用，不过一般用到的不多。
            // getUserConfirmation={(message, callback) => {
            //     // this is the default behavior
            //     const allowTransition = window.confirm(message)
            //     callback(allowTransition);
            // }}
            >
                <Link to='/'>首页</Link>
                <Link to="/user">用户中心</Link>
                <Link to="/login">登录</Link>
                <Link to="/children">children</Link>
                <Link to="/render">render</Link>
                <Link to="/search/123">search</Link>
                <Link to="/modalswicth">Modal Switch</Link>
                {/* <Switch location={{pathname: "/user"}}> */}
                <Route exact path="/" component={HomePage} />
                {/* <Route path="/user" component={UserPage} /> */}
                <PrivateRoute path="/user" component={UserPage} />
                <Route path="/login" component={LoginPage} />

                <Route path="/children" children={() => <div>children</div>} />
                <Route path="/render" render={() => <div>render</div>} />
                <Route path="/search/:id" children={<SearchComponent />} />
                <Route path="/modalswicth" component={ModalSwitch} />
                {/* 如果Route没有path参数，将始终被匹配 */}
                <Route render={() => <div>404</div>} />

                {/* </Switch> */}
            </Router>
        </div>
    )
}

export default AppPage;

function DetailComonent(props) {
    return <div>DetailComonent</div>;
  }
  
  function SearchComponent(props) {
    console.log("use", useParams(), useLocation(), useHistory()); //sy-log
    const {id} = useParams(); //props.match.params;
    return (
      <div>
        <div>SearchComponent-{id}</div>
        <Link to="/search/123/detail">详情</Link>
        <Route path="/search/:id/detail" component={DetailComonent} />
      </div>
    );
  }