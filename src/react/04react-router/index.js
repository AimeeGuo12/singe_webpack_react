import React, {Component} from 'react';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import LoginPage from './components/LoginPage';
import PrivateRoute from './router-private';
export default class RouterPage extends Component {
    render() {
        return (
            <div>
                <h1>RouterPage</h1>
                <BrowserRouter>
                    <nav>
                        <Link to='/'>首页</Link>
                        <Link to='/user'>⽤户中⼼</Link>
                        <Link to='/login'>登陆页</Link>
                    </nav>
                    {/* 根路由要添加exact，实现精确匹配 */}
                    <Route exact path='/' component={HomePage}></Route>
                    {/* <Route exact path='/user' component={UserPage}></Route> */}
                    <Route exact path="/login" component= {LoginPage} />
                    <PrivateRoute path="/user" component={UserPage}/>
                </BrowserRouter>
            </div>
        )
    }
}