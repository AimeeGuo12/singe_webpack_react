import React, { Component } from 'react';
import store from '../redux/store/index-01'
import aFormCreate from '../components/aFormCreate';
const numRules = {required: true, message: "请输入数字！"};
// 实现输入框的加减法，比如说输入10，加10，用上combineReducers。
class ReduxPageInput extends Component {

    componentDidMount() {
        // 订阅
        store.subscribe(() => { // 这里的目的是 将强制更新订阅，这样每次派发了dispatch页面就会强制刷新一次
            this.forceUpdate(); // 强制更新
        })
    }
    validate = callback => {
        const {validateFields} = this.props;
        validateFields((err, values) => {
          if (err) {
            console.error(err);
          } else {
            callback();
          }
        });
      };
    add = () => {
        // store.dispatch({type: "ADD"})
        this.validate(() => {
            const {getFieldValue} = this.props;
            const num = getFieldValue("num");
            store.dispatch({type: "ADD", payload: num - 0})
        })
    }
    minus = () => {
        // store.dispatch({type: "MINUS"})
        this.validate(() => {
            const {getFieldValue} = this.props;
            const num = getFieldValue("num");
            store.dispatch({type: "MINUS", payload: num - 0});
          });
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
        const {getFieldDecorator} = this.props;
        return (
            <div>
                <h3>ReduxPage</h3>
                {/* getState获取数据 */}
                <p>{store.getState().count}</p>
                {getFieldDecorator("num", {rules: [numRules]})(<input type="text" />)}
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
                <button onClick={this.asyAdd}>asyAdd</button>
            </div>
        )
    }

}

export default aFormCreate(ReduxPageInput);