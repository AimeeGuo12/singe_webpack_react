import React, { Component } from 'react';
import store from '../redux/store'

class ReduxPage extends Component {

    componentDidMount() {
        // 订阅
        store.subscribe(() => { // 这里的目的是 将强制更新订阅，这样每次派发了dispatch页面就会强制刷新一次
            this.forceUpdate(); // 强制更新
        })
    }
    add = () => {
        store.dispatch({type: "ADD"})
    }
    minus = () => {
        store.dispatch({type: "MINUS"})
    }
    asyAdd = () => {
        store.dispatch(dispatch => { // 使用中间件包装后返回的还是dispatch， 使之可以进行异步
            setTimeout(() => {
                dispatch({type: "ADD"})
            }, 1000)
        })
    }
    render() {
        console.log('store',store)
        return (
            <div>
                <h3>ReduxPage</h3>
                {/* getState获取数据 */}
                <p>{store.getState()}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
                <button onClick={this.asyAdd}>asyAdd</button>
            </div>
        )
    }

}

export default ReduxPage;