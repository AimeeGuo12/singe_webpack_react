import React from 'react';
import {connect} from 'react-redux';
// import { Router, Route, Link } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';
// import {hot} from 'react-hot-loader/root';
// import './app.css';
// import './app.scss';
// import styles from './app.scss';
// import Btn from './components/Btn';
import ReactDom from 'react-dom';
// import Tree from './components/Tree';
// import AsyncTree from './components/myAsyncTree/TreeSyncTest';
// import {currying} from './js/currying'
import ReactApp from './react/02redux/index';
// 源码部分
// import ReduxPage from './originalcode/pages/ReduxPage';
// import ReduxPageInput from './originalcode/pages/ReduxPage-Input-10';
import ReactReduxPage from './react/03react-redux/index'
// 路由
import RouterBream from './router/index';
import RouterPage from './react/04react-router/index';
import RouteChildren from './react/04react-router/router-childre';
import RouteComponent from './react/04react-router/router-component';
import RouterSearchPage from './react/04react-router/router-search';
// import AppPage from './react/04react-router/work/index';
// import AppPage from './react/05g-react-router/index';
// import FuckEvent from './react/hecheng'
// import BigData from './components/Study/BigData.js'
// import IndexDemo from './hooks'
import {IndexDemo1, UnControll} from './hooks'
class App extends React.Component{
    render = () => {
        return (
            <div className='title'>
                {/* <button onClick={currying}>测试</button> */}
            {/* // <div className={styles.title}> */}
    
                {/* hello react */}
                {/* <img src={pic_1} alt="" style={{width: 100, height: 100}}/>
                <img src={pic_2} alt="" style={{width: 100, height: 100}}/> */}
                {/* <Btn></Btn> */}
                {/* <Tree></Tree> */}
                {/* <AsyncTree></AsyncTree> */}

                {/* Redux学习 */}
                {/* <ReduxPage></ReduxPage> */}
                {/* <ReduxPageInput></ReduxPageInput> */}
                {/* <ReactReduxPage></ReactReduxPage> */}
                {/* <Router> 
                    <RouterBream/>
                </Router> */}

                {/* <ReactApp></ReactApp> */}
               <br/>
               {/* 路由 */}
               {/* <RouterPage></RouterPage> */}
               {/* <RouteChildren></RouteChildren>
               <RouteComponent></RouteComponent>
               <RouterSearchPage></RouterSearchPage> */}
               {/* <AppPage></AppPage> */}
               {/* <FuckEvent></FuckEvent> */}
               {/* <BigData/> */}
               {/* <IndexDemo/> */}
               <IndexDemo1/>
               <UnControll/>
            </div>
        )
    }
}
// export default hot(App);
// const mapStateToProps = state => {
//     return {
//       articles: state.articles,
//     }
//   }
  
//   const mapDispatchToProps = dispatch => {
//     return {
//       saveArticle: article => dispatch(simulateHttpRequest(article)),
//     }
//   }
// App = connect()(App);
export default App;