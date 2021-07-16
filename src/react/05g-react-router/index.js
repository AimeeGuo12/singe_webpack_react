import React from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "./g-react-router-dom/index";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./pages/PrivateRoute";
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
                {/* <Switch> */}
                <Route exact path="/" component={HomePage} />
                {/* <Route path="/user" component={UserPage} /> */}
                <PrivateRoute path="/user" component={UserPage} />
                <Route path="/login" component={LoginPage} />

                <Route path="/children" children={() => <div>children</div>} />
                <Route path="/render" render={() => <div>render</div>} />
                {/* </Switch> */}
            </Router>
        </div>
    )
}

export default AppPage;