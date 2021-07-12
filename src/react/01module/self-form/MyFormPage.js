import React, { Component } from "react";
import myFormCreate from './components/myFormCreate.js';

//校验规则
const nameRules = { required: true, message: "please input ur name" };
const passwordRules = { required: true, message: "please input ur password" };
export default myFormCreate(
    class MyFormPage extends Component {
        submit = () => {
            const { getFieldsValue, getFieldValue, validateFields } = this.props;
            validateFields((err, values) => {
                if (err) {
                    console.log("err", err);
                } else {
                    console.log("success", values);
                }
            });
            console.log("submit", getFieldsValue(), getFieldValue("name"));
        };
        render() {
            console.log("props", this.props);
            const { getFieldDecorator } = this.props;
            return (
                <div>
                    <h3>MyFormPage</h3>
                    {getFieldDecorator("name", { rules: [nameRules] })(
                        <input type="text"
                            placeholder="please input ur name" />
                    )}
                    {getFieldDecorator("password", { rules: [passwordRules] })(
                        <input type="password"
                            placeholder="please input ur password" />
                    )}
                    <button type="primary" onClick={this.submit}>
                        提交</button>
                </div>
            );
        }
    }
)

