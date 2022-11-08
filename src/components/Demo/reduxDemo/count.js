import React, { Component } from 'react';
import store from './store';
class ReduxPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        store.subscribe(() => { //这里的目的是 将强制更新订阅，这样每次派发了dispatch页面就会强制刷新一次
            this.forceUpdate();
        })
    }

    add = () => {
        store.dispatch({
            type: 'ADD'
        })
    }
    minus = () => {
        // 异步
        store.dispatch(dispatch => { // 使用中间件包装后返回的还是dispatch， 使之可以进行异步
            setTimeout(() => {
                dispatch({ type: 'MINUS' })
            }, 1000)
        });
    };

    render() {

        return (
            <div className="App">
                <p>{store.getState()}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
            </div>
        )
    }
}
export default ReduxPage;