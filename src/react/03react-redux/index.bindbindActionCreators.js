import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export default connect(state => {
    return { count: state }
}, dispatch => {
    let res = {
        add: () => ({ type: "add" }),
        minus: () => ({ type: "minus" })
    };
    res = bindActionCreators(res, dispatch);
    return { dispatch, ...res }
}, (stateProps, dispatchProps, ownProps) => {
    //  mergeProps 如果指定了这个参数，`mapStateToProps()` 与
    // `mapDispatchToProps()` 的执⾏结果和组件⾃身的
    // `props` 将传⼊到这个回调函数中
    return { omg: "omg", ...stateProps, ...dispatchProps, ...ownProps };
})(
    class ReactReduxPage extends Component {
        render() {
            console.log("props", this.props); //sylog
            const { count, dispatch, add, minus } = this.props;
            return (
                <div>
                    <h3>ReactReduxPage</h3>
                    <p>{count}</p>
                    <button onClick={() => dispatch({ type: "ADD" })}>
                        add use dispatch </button>
                    <button onClick={add}>add</button>
                    <button onClick={minus}>minus</button>
                </div>
            );
        }
    }
)