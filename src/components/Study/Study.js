// import React from 'react';
// import ReactDOM from 'react-dom'
// const { unstable_batchedUpdates } = ReactDOM

// class Study extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             number: 0
//         }
//     }
//   clickHandle = () => {
//     setTimeout(()=>{
//         // unstable_batchedUpdates(()=>{
//         //     this.setState({ number:this.state.number + 1 })
//         //     console.log(this.state.number)
//         //     this.setState({ number:this.state.number + 1})
//         //     console.log(this.state.number)
//         //     this.setState({ number:this.state.number + 1 }, () => {
//         //         console.log('内部',this.state.number)
//         //     })
//         //     console.log(this.state.number) 
//         // })
//         this.setState((state, props) => {
//             return {number: state.number + 1}
//         })
//         this.setState((state, props) => {
//             return {number: state.number + 1}
//         })
//         this.setState((state, props) => {
//             return {number: state.number + 1}
//         })
//         console.log(this.state.number)
//     })
//   }

//   render() {

//     return (
//         <div>
//             <button onClick={this.clickHandle}>按钮</button>
//         </div>
//     )
//   }
// }

// export default Study;

import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

const ChildNoReRender = (props) => {
  console.log("我是不重新渲染的子组件");
  return <div>我是不重新渲染的子组件</div>;
};

function ChildReRender() {
    console.log("我重新渲染的子组件");
  const theme = useContext(ThemeContext);
  return (
    <>
      <div>我是重新渲染的子组件~ {theme}</div>
    </>
  );
}

function ThemeApp(props) {
  const [theme, setTheme] = useState("YES");
  const onChangeComponent = () => setTheme(theme === "YES" ? "NO" : "YES");
  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={onChangeComponent}>改变子组件</button>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default function Study() {
  return (
    <ThemeApp>
      <ChildReRender />
      <ChildNoReRender />
    </ThemeApp>
  );
}