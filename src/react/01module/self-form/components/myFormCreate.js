import { call } from "file-loader";
import React, { Component } from "react";

export default function myFormCreate(Cmp){
    return class extends Component{
        constructor(props){
            super(props)
            this.state={},
            this.options={}
        }
        handleChange = (e) => {
            let {name, value} = e.target;
            this.setState({
                [name]: value
            })
        }
        validateFields = (callback) => {
            let errors = {};
            const state = {...this.state};
            for(let filed in this.options) {
                if(state[filed] === undefined) {
                    errors[filed] = 'error';
                }
                // console.log('item', filed)
            }

            if(JSON.stringify(errors) === "{}") {
                callback(undefined, state);
            } else {
                // 有错误信息
                callback(errors, state)
            }
        };
    
        getFieldDecorator = (field, option) => {
            this.options[field] = option
            return ((InputComp) => {
                // 克隆 并添加属性
                return React.cloneElement(InputComp, {
                    name: field,
                    value: this.state[field] || '',
                    onChange: this.handleChange
                })
            })
        };
        getFieldValue = (field) => {
            return this.state[field];
        }
        getFieldsValue = () => {
            return { ...this.state};
        }

        render() {
            return (
                <div>
                   <Cmp
                   {...this.props}
                   getFieldDecorator={this.getFieldDecorator}
                   getFieldValue={this.getFieldValue}
                   getFieldsValue={this.getFieldsValue}
                   validateFields={this.validateFields}
                   />
                </div>
            )
        }
    }

   
}