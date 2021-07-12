import React, {Component} from 'react';
import MyFormPage from './self-form/MyFormPage';
import DialogPage from './self-dialog/index';
const HocColor = Comp => props => {
    return <div style={{color: 'red'}}><Comp {...props}/></div>
}
const HocSize = Comp => props => {
    return <div style={{fontSize: '20px'}}><Comp {...props}/></div>
}
@HocSize
@HocColor
class Child extends Component {
    constructor(props){
        super(props)
        this.props = props
    }
    render() {
        return <div> Child {this.props.name}</div>; 
    }
}
// const Foo = HocSize(HocColor(Child));


class ReactApp extends Component{


    render() {
        return(
            <div>
                <div>Hoc</div>
                {/* <Foo name='张三'></Foo>  */}
                <Child name='张三'></Child>
                <MyFormPage></MyFormPage>
                <DialogPage></DialogPage>
            </div>
        )
    }
}
export default ReactApp;