import React, {Component} from "react";
// import {Route, Redirect} from "react-router-dom";
import {Route, Redirect} from '../g-react-router-dom/index';
import {connect} from "react-redux";

export default connect(
  // mapStateToProps
  ({user}) => ({isLogin: user.isLogin})
)(
  class PrivateRoute extends Component {
    render() {
      const {isLogin, path, component} = this.props;
      if (isLogin) {
        // 登录
        return <Route path={path} component={component} />;
      } else {
        // 去登录，跳转登录页面
        return <Redirect to={{pathname: "/login", state: {redirect: path}}} />;
      }
    }
  }
);
