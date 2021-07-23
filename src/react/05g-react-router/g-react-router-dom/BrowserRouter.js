import React, {Component} from "react";
import {createBrowserHistory} from "history";
import {RouterContext} from './RouterContext';
export default class BrowserRouter extends Component{
    static computeRootMatch(pathname){
        return {
            path: "/",
            url: "/",
            params: {},
            isExact: pathname === "/"
        }
    }
    constructor(props) {
        super(props);
        this.history = createBrowserHistory();
        this.state = {
            location: this.props.location || {
                pathname: ''
            }
        }
        this.unlisten = this.history.listen(location => {
            this.setState({
                location
            })
        })
    }
    componentWillUnmount() { // 卸载监听  api规定的写法
        if (this.unlisten) {
            this.unlisten()
        }
    }
    render() {
        return (
            <RouterContext.Provider
                value = {{
                    history: this.history,
                    location: this.state.location,
                    match: this.state.location && BrowserRouter.computeRootMatch(this.state.location.pathname) || {}
                }}
            >
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}