class Parent extends React.Component {
    getChildMsg = (msg) => {
        console.log('接收到子组件数据', msg)
    }
    render() {
        return (
            <div>
                子组件：<Child getMsg={this.getChildMsg} />
            </div>
        )
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            childMsg: '我是子组件传递过来的数据'
        }
    }
    handClick = () => {
        this.props.getMsg(this.state.childMsg)
    }

    render() {
        return (
            <button onClick={this.handClick}>点我发送数据</button>
        )
    }
}