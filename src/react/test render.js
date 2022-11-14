import React, {Component} from "react";
class Parent extends Component {

  render() {
    console.log('this.is parent')

    return (
      <div>
        <span>父组件</span>
        <Children/>
      </div>
    )
  }
}

class Children extends Component{
  constructor(){
    super()
  }

  render() {
    console.log('this is children1')
    return <div>子组件</div>
  }
}


function Parent1 () {
  return (
    <div>
    <span>父组件</span>
    <Children1/>
  </div>
  )
}

function Children1 () {
  console.log('childern1')
  return <div>Children</div>
}