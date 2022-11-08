class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lastName: '张',
            firstName: '三',
        }
    }

    render() {
        return (
            <div>
                传递数据给子组件,<Child lastName={this.state.lastName} />
            </div>
        )
    }
}

function Child(props) {
    return <div>子组件接收到的数据：{props.lastName}</div>
}
class Child extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>子组件接收到的数据：{this.props.lastName}</div>
    }
}

