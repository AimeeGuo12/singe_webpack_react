import React, { Component } from "react";
import { render } from "react-dom";

// 创建一个theme context，默认值为light
const { Provider, Consumer } = React.createContext("light");

const ThemeButton = props => {
    return <Consumer>{theme => <button {...props}>{theme}</button>}</Consumer>;
};

// 中间组件
const Toolbar = props => <ThemeButton />;

class App extends Component {
    render() {
        return (
            <Provider value="dark">
                <Toolbar />
            </Provider>
        );
    }
}

render(<App />, document.getElementById("root"));