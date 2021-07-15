import React, {Component} from "react";
import {ThemeContext} from "./themeContext";

export default class ContextTypePage extends Component{
    /**
     * 静态写法，挂到类上
        这种用法只能订阅一个context，并且是类组件。
        函数使用consume
        或者在底部ContextTypePage.contextType = ThemeContext
        这样使用
     */

    static contextType = ThemeContext;

    render() {
        //this.context在任何生命周期都可以访问到
        const {themeColor} = this.context;
        console.log('.........', themeColor)
        return (
            <div style={{'border': '1px solid pink'}}>
            <h3 className= {themeColor}>ContextTypePage</h3>
            </div>
        )
    }

}