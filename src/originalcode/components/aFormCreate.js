import React, { Component, useCallback } from "react";

// 高阶函数  仿照antD的form写的
export default function aFormCreate(Cmp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = { errors: {} };
            this.options = {};
        }
        handleChange = e => {
            let { name, value } = e.target;
            this.validate({
                ...this.state,
                [name]: value
            });
        }
        getFieldsValue = () => {
            return { ...this.state };
        }
        getFieldValue = (field) => {
            return this.state[field];
        }
        // getFieldDecorator("num", { rules: [numRules] })(<input type="text" />)
        getFieldDecorator = (field, option) => {
            this.options[field] = option;
            return InputComp => {
                // 克隆一份
                return (
                    <div>
                        {React.cloneElement(InputComp, {
                            name: field,
                            value: this.state[field] || "",
                            onChange: this.handleChange
                        })}
                        <p className="red">{this.state.errors[field]}</p>
                    </div>
                )
            }
        }
        validate = (state, afterSetState) => {
            const errors = {};
            for (let name in this.options) {
                if (state[name] === undefined) {
                    // 没有输入 判断为不合法
                    errors[name] = this.options[name].rules[0].message;
                }
            }
            this.setState({ ...state, errors }, afterSetState);
        }

        // 校验错误信息
        validateFields = callback => {
            // 校验错误信息
            // const errors = {};
            const state = { ...this.state };
            // for (let name in this.options) {
            //   if (state[name] === undefined) {
            //     // 没有输入，判断为不合法
            //     errors[name] = this.options[name].rules[0].message; //"error";
            //   }
            // }
            // this.setState({errors});
            this.validate(state, () => {
                const { errors } = this.state;
                if (JSON.stringify(errors) === "{}") {
                    // 合法
                    callback(undefined, state);
                } else {
                    callback(errors, state);
                }
            });
        }
        render() {
            return (
                <div className="border">
                    <Cmp
                        getFieldDecorator={this.getFieldDecorator}
                        getFieldsValue={this.getFieldsValue}
                        getFieldValue={this.getFieldValue}
                        validateFields={this.validateFields}
                    />
                </div>
            )
        }
    }
}

