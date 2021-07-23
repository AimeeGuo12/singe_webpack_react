import React, {Component} from "react";
import {RouterContext} from "./RouterContext";

export default class Link extends Component{

    handleClick = (event, history) => {
        event.preventDefault();
        history.push(this.props.to); // 跳转到指定的链接
    }
    render() {
        return (
            <RouterContext.Consumer>
                {context => (
                <a 
                href={this.props.to} 
                onClick={e => this.handleClick(e, context.history)}
                >{this.props.children}</a>)}
            </RouterContext.Consumer>
        )
    }
}