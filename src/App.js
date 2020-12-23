import React from 'react';
import {connect} from 'react-redux';
// import {hot} from 'react-hot-loader/root';
// import './app.css';
// import './app.scss';
// import styles from './app.scss';
import Btn from './components/Btn';
import ReactDom from 'react-dom';
import Tree from './components/Tree';
import AsyncTree from './components/myAsyncTree/TreeSyncTest';
import {currying} from './js/currying'
class App extends React.Component{
    render = () => {
        return (
            <div className='title'>
                <button onClick={currying}>测试</button>
            {/* // <div className={styles.title}> */}
    
                hello react
                {/* <img src={pic_1} alt="" style={{width: 100, height: 100}}/>
                <img src={pic_2} alt="" style={{width: 100, height: 100}}/> */}
                {/* <Btn></Btn> */}
                {/* <Tree></Tree> */}
                <AsyncTree></AsyncTree>
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