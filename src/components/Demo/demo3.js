// 兄弟组件通信
// 点击子组件Child2中的按钮，Child1中数据+1
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }
    handAdd = () => {
        this.setState({
            num: this.state.num + 1
        })
    }
    render() {
        return (
            <div>
                <Child1 num={this.state.num}></Child1>
                <Child2 add={this.handAdd}></Child2>
            </div>
        )
    }
}

class Child1 extends React.Component {
    render() {
        return (
            <div>
                <h1>计数器：{this.props.num}</h1>
            </div>
        )
    }
}
class Child2 extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.add}>+1</button>
            </div>
        )
    }
}
