import React, { Component } from 'react';
import { ThemeProvider } from "./contextComp/themeContext";
import ContextTypePage from './contextComp/ContextTypePage';
import ConsumerPage from "./contextComp/ConsumerPage";
import ReduxPage from './redux/ReduxPage';
class ReactApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: {
                themeColor: "red"
            }
        };
    }

    changeColor = () => {
        const { themeColor } = this.state.theme;
        this.setState({
            theme: {
                themeColor: themeColor === "red" ?
                    "green" : "red"
            }
        })
    }
    render() {
        const { theme } = this.state;
        return (
            <div className="App">
                {/* 组件跨层级通信 */}
                <button onClick={this.changeColor}>change color</button>
                {/* 如果把这⾥的MyProvider注释掉，ContextTypePage和ConsumerPage⾥将取不到theme值，⽽取默认值pink */}
                <ThemeProvider value={theme}>
                    <ContextTypePage />
                    <ConsumerPage />
                </ThemeProvider>

                <ReduxPage></ReduxPage>
            </div>
        )
    }
}
export default ReactApp;