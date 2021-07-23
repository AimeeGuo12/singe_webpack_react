import React, {Component} from 'react';
import {RouterContext} from './RouterContext';

export default class Redirect extends Component{
    render() {
        return (
            <RouterContext.Consumer>
                {
                    context => {
                        const {history} = context;
                        const {to} = this.props;
                        // history.push(to) //有字符串和对象两种，这里只简单处理
                        return <LifeCycle onMount={() => {
                            history.push(to)
                        }}/>
                    }
                }
            </RouterContext.Consumer>
        )
    }
}

class LifeCycle extends Component {
    componentDidMount() {
      if (this.props.onMount) {
        this.props.onMount();
      }
    }
    render() {
      return null;  // 不需要返回值，只是做一个跳转
    }
  }