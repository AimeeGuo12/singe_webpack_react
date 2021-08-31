/*
 * @Author: your name
 * @Date: 2021-07-26 21:45:14
 * @LastEditTime: 2021-07-28 16:43:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /singe_webpack_react/src/react/07fiber-diff/index.js
 */
// import React, {Component} from "react";
// import ReactDOM from "react-dom";
import React from "./greact2/index";
import ReactDOM, {useState} from "./greact2/ReactDOM";
import Component from "./greact2/Component";
import "./index.less";

function FunctionComponent({name}) {
    return (
        <div className="border function">
            hello, {name}
            <button onClick={() => console.log("omg")}>click</button>
      </div>
    )
}

// 每次render函数都会运行， 即里面的局部变量每次render都会重置， 所以state要作为一个全局变量
function AppUseState({}) {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);
  const onClickHandler = () => {
    setCount(count + 1)
  }
  const onClickHandler2 = () => {
    setCount2(count2 + 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button type="" onClick={onClickHandler}>count_1</button>
      <h1>{count2}</h1>
      <button type="" onClick={onClickHandler2}>count_2</button>
    </div>
  )
}
class ClassComponent extends Component {
    render() {
      const {name} = this.props;
      return <div className="border function">hello, {name}</div>;
    }
  }
  ClassComponent.defaultProps={
    name: '测试'
  }
  const jsx = (
    <div className="border">
      <p>这是一个文本</p>
      <a href="https://baidu.com/">百度</a>
      <div className="border">
        <h5>hello</h5>
      </div>
      <FunctionComponent name="function" />
      <ClassComponent  /> 
      {/* name="class" */}
      <AppUseState></AppUseState>
      <>
        <h5>文本1</h5>
        <h5>文本2</h5>
      </>
  
      {/* {[1, 2, 3].map(item => {
        return (
          <div className="border" key={item}>
            <p>{item}</p>
            <p>{item}</p>
          </div>
        );
      })} */}
    </div>
  );
  
  // element， container
  // vnode->node , 把node渲染更新到container
  ReactDOM.render(jsx, document.getElementById("app"));
  
  // !节点类型
  // 文本节点
  // html标签节点
  // class componet
  // function component
  // fragment
  
  // jsx=>createElement(生成element，就是我们需要的虚拟dom)=>render(vnode->node, 再把node渲染到container)
  // vnode->node的流程注意下节点的区分，不同节点处理方式不同