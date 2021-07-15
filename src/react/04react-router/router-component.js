import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default class RouteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <h3>RouteComponent</h3>
                <button
                    onClick={() => {
                        this.setState({ count: count + 1 });
                    }}>
                    click change count {count}
                </button>
                <Router>
                    {/* 渲染component的时候会调⽤React.createElement，如果使⽤下⾯这种匿名函数的形
                    式，每次都会⽣成⼀个新的匿名的函数，导致⽣成的组件的type总是不相同，这个时候会
                    产⽣重复的卸载和挂载 */}
                    {/* 错误举例 课下⾃⼰尝试下 观察下child的didMount和willUnmount函数 */}
                    {/* 每次点击变化count Child组件都会重新渲染 */}
                    {/* <Route component={() => <Child count={count} />} /> */}
                    {/* <Route component={() => <FunctionChild count={count} />} /> */}

                    {/* 正确写法 内联组件用render而不是component */}
                    {/* 下面两种写法------数组改变不会调 componentDidMount和componentWillUnmount 即不会重新生成卸载整个组件*/}
                    <Route render={() => <Child count={count} />} />
                    {/* <Route render={() => <FunctionChild count={count} />} /> */}
                    {/* children 呢 */}
                    <Route children={() => <Child count={count} />} />
                    {/* <Route children={() => <FunctionChild count={count} />} /> */}
                </Router>
            </div>
        )
    }
}

class Child extends Component {
    componentDidMount() {
        console.log("componentDidMount"); 
    }
    componentWillUnmount() {
        console.log("componentWillUnmount"); 
    }
    render() {
        return <div>child-{this.props.count}</div>;
    }
}
// hook的例⼦ 
function FunctionChild(props) {
    useEffect(() => {
        return () => {
            console.log("WillUnmount");
        };
    }, []);
    return <div>child-{props.count}</div>;
}