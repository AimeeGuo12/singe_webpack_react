import React, { Component } from "react";
import { Form, Input, Button, Icon } from "antd";
// ⽤Form.create()的⽅式实现：
// getFieldDecorator： ⽤于和表单进⾏双向绑定
// getFieldsValue：获取⼀组输⼊控件的值，如不传⼊参数，则获
// 取全部组件的值
// getFieldValue： 获取⼀个输⼊控件的值
// validateFields：校验并获取⼀组输⼊域的值与 Error，若
// fieldNames 参数为空，则校验全部组件

//校验规则
const nameRules = { required: true, message: "please input ur name" };
const passwordRules = { required: true, message: "please input ur password" };

@Form.create()
class FormPage2 extends Component {
    submit = () => {
        const { getFieldsValue, getFieldValue, validateFields } = this.props.form;
        validateFields((err, values) => {
            if (err) {
                console.log("err", err); //sy-log
            } else {
                console.log("success", values); //sy-log
            }
        });
    };
    render() {
        console.log("props", this.props.form);
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <h3>FormPage2</h3>
                <Form>
                    <Form.Item label="姓名">
                        {getFieldDecorator("name", { rules: [nameRules] })(
                            <Input
                                placeholder="please input ur name"
                                prefix={<Icon type="user" />}
                            />
                        )}
                    </Form.Item>
                    <Form.Item label="密码">
                        {getFieldDecorator("password", { rules: [passwordRules] })(
                            <Input
                                type="password"
                                placeholder="please input ur password"
                                prefix={<Icon type="lock" />}
                            />
                        )}
                    </Form.Item>
                    <Button type="primary" onClick={this.submit}>
                        提交</Button>
                </Form>
            </div>
        );
    }
}
export default FormPage2;

 class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: ""
        };
    }
    submit = () => {
        console.log("submit", this.state);
    };
    render() {
        const { name, password } = this.state;
        return (
            <div>
                <h3>FormPage</h3>
                <Form>
                    <Form.Item label="姓名">
                        <Input
                            placeholder="please input ur name"
                            prefix={<Icon type="user" />}
                            value={name}
                            onChange={e => {
                                this.setState({ name: e.target.value });
                            }}
                        />
                    </Form.Item>
                    <Form.Item label="密码">
                        <Input
                            type="password"
                            placeholder="please input ur password"
                            prefix={<Icon type="lock" />}
                            value={password}
                            onChange={e => {
                                this.setState({ password: e.target.value });
                            }}
                        />
                    </Form.Item>
                    <Button type="primary" onClick={this.submit}>
                        提交
 </Button>
                </Form>
            </div>
        );
    }
}
// export default FormPage