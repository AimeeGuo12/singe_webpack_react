import React, {Component} from 'react';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
function DetailComponent(props) {
    return <div>DetailComponent</div>; 
}
function SearchPage(props) {
    const {id} = props.match.params;
    return(
        <div>
            <h3>SearchComponent</h3>
            <span>searchId:{ id }</span>
            <Link to={'/search/' + id + '/detail'}>详情</Link>
            <Route exact path='/search/:id/detail' component={DetailComponent}></Route>
        </div>
    )
}

export default class RouterSearchPage extends Component {
    render() {
        const searchId = '1234';
        return (
            <div>
                <h1>RouterSearchPage</h1>
                <BrowserRouter>
                    <nav>
                        <Link to='/'  style={{padding: '5px'}}>首页</Link>
                        <Link to='/user'  style={{padding: '5px'}}>⽤户中⼼</Link>
                        <Link to={"/search/" + searchId}  style={{padding: '5px'}}>搜索</Link>
                    </nav>
                    {/* 根路由要添加exact，实现精确匹配 */}
                    <Route exact path='/' component={HomePage}></Route>
                    <Route exact path='/user' component={UserPage}></Route>
                    <Route exact path='/search/:id' component={SearchPage}></Route>
                </BrowserRouter>
            </div>
        )
    }
}