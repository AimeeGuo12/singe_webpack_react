import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import store from '../store/store'
const ValueContext = React.createContext();

// connect
export const connect = (
    mapStateToProps = state => state,
    mapDispatchToProps
) => WrappedComponent => {
    return class extends Component {
        static contextType = ValueContext;
        constructor(props) {
            super(props);
            this.state = {
                props: {}
            }
        }
        componentDidMount() {
            this.update();
            // 监听 来刷新页面，
            const { subscribe } = store //this.context;
            subscribe(() => {
                this.update();
            })
        };

        update = () => {
            // 获取当前store的state.   store.getState()
            const { getState, dispatch } = store //this.context;
            // getState()返回的是当前state的值。 将这个值作为mapStateToProps的参数
            const stateProps = mapStateToProps(getState());
            let dispatchProps;
            console.log("mapDispatchToProps", mapDispatchToProps)
            // 对象， 对象的时候本身没有dispatch， 使用bindActionCreators
            // 这个函数的实现在预习里
            if (typeof mapDispatchToProps === 'object') {
                dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
            } else if (typeof mapDispatchToProps === 'function') {
                // 函数时， 直接执行
                dispatchProps = mapDispatchToProps(dispatch, this.props);
            } else {
                dispatchProps = { dispatch }
            }
            this.setState({
                props: {
                    ...stateProps,
                    ...dispatchProps
                }
            })
        }
        render() {
            return <WrappedComponent
                {...this.state.props}
            />
        }
    }
}

// Provider
// /context
export class Provider extends Component {
    render() {
        return (
            <ValueContext.Provider value={this.props.store}>
                {this.props.children}
            </ValueContext.Provider>
        );
    }
}


// let creators = {
    // add: () => ({type: "ADD"}),
    // minus: () => ({type: "MINUS"})
// };
function bindActionCreator(creator, dispatch) {
    return (...args) =>
        dispatch(creator(...args));
}
export function bindActionCreators(creators,dispatch) {
    const obj = {};
    for (const key in creators) {
        obj[key] = bindActionCreator(creators[key],dispatch);
    }
    return obj;
}
