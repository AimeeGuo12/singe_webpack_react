import React from 'react'
// import PropTypes from 'prop-types'
// TO DO LIST
class App extends React.Component {
  constructor(props) { // 构造函数
    super(props) // 调用父类的构造函数  固定写法
    // 初始化状态
    this.state = {
      todos: ['吃饭', '睡觉', '打豆豆']
    }
    this.add = this.add.bind(this)
  }
  componentDidMount() {

  }
  add(todo) {
    const { todos } = this.state
    todos.unshift(todo)
    //更新状态
    this.setState({ todos })
  }
  render() {
    const { todos } = this.state
    return (
      <div>
        <TodoAdd add={this.add} count={todos.length} />
        <TodoList todos={todos} />
      </div>
    )
  }
}

export default App
// 添加todo组件
class TodoAdd extends React.Component {
  constructor(props) {
    super(props)
    this.addTodo = this.addTodo.bind(this)
  }
  addTodo() {
    // 读取输入数据
    const text = this.input.value.trim()
    // 查检
    if (!text) {
      return
    }
    // 保存到todos
    this.props.add(text)
    // 清除输入
    this.input.value = ''
  }
  render() {
    return (
      <div>
        <h2>Simple TODO List</h2>
        <input type="text" ref={input => this.input = input} />
        <button onClick={this.addTodo}>Add #{this.props.count}</button>
      </div>
    )
  }
}
// TodoAdd.propTypes = {
//   // add: PropTypes.func.isRequired,
//   count: PropTypes.number.isRequired
// }

// todo列表组件
class TodoList extends React.Component {
  render() {
    const { todos } = this.props
    //等同于 const todos=this.props.todos
    return (
      <ul>
        {
          todos.map((todo, index) => <li key={index}>{todo}</li>)
        }
      </ul>
    )
  }
}
// TodoList.propTypes = {
//   todos: PropTypes.array.isRequired
// }

// 渲染应用组件标签
// ReactDOM.render(<App />, document.getElementById('example'))