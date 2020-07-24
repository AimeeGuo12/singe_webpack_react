import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';  // 引入antd样式表
import Gzip from '../common/utils/utils'
import { add1 } from '../actions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index'
class Btn extends React.Component {
    constructor(props) {
        super(props);
        // this.state={
        //     test: ''
        // }
        // this.clickHandle = this.clickHandle.bind(this)
    }
     clickHandle = () => {
        // let str = 'csa'
        // let data = new Gzip
        // let data1= data.zip(str)
        // console.log(data, data1)
        // this.setState({
        //     test: data
        // })
        // console.log(data)
        // this.props.add1(data)
        this.props.actions.add1()
    }
    
    // test = () => {
    //     let str = 'csa'
    //     let data = new Gzip.zip(str)
    //     this.setState({
    //         test: data
    //     })
    //     console.log(data)
    // }
    render () {
        console.log(this.props.a, this.props.add1)
        // const {a} = this.props
        return (
            <div>
                <Button onClick={() => this.clickHandle()}>+</Button>
                <span>{this.props.a}</span>
            </div>
        )
    }
  
}
const mapStateToPropsButton = state => {
    return {
      a: state.a,
    }
  }
  
  const mapDispatchToPropsButton = dispatch => {
    // return {actions:bindActionCreators(actions, dispatch)}
    return{
      add1() {
        const actions = {
          type: 'ADD1'
        }
        dispatch(actions)
      }
    
    }
    
  }
  Btn = connect(mapStateToPropsButton, mapDispatchToPropsButton)(Btn)
export default Btn;