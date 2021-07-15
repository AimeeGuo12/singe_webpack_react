// 路由守卫
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
export default class PrivateRoute extends Component {
    render() {
        const { isLogin, path, component } = this.props;
        if (isLogin) {
            // 登陆
            return <Router path='path' component={component}></Router>
        } else {
            // 去登录，跳转登录⻚⾯
            return <Redirect to={{pathname: "/login", state: {redirect: path}}}></Redirect>
        }
    }
}