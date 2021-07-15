import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default class LoginPage extends Component {
    render() {
        const { isLogin, location } = this.props;
        // 取出 state: {redirect: path}的值 默认为‘/’
        const { redirect = "/" } = location.state || {};
        console.log("props", this.props); //sy-log
        if (isLogin) {
            // 已经登录
            return <Redirect to={redirect} />;
        } else {
            return (
                <div>
                    <h3>LoginPage</h3>
                    <button onClick={() => { }}>click</button>
                </div>
            );
        }

    }
}