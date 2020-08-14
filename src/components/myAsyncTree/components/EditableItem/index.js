import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { values } from 'lodash';
import 'antd/dist/antd.css';  // 引入antd样式表
const FormItem = Form.Item;
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class EditableItem extends React.Component {
  formRef = React.createRef();

  onGenderChange = value => {
    this.formRef.current.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };

  onFinish = (e) => {
    e.preventDefault();
    const {form } = this.props;
    let formValue = {};
    form.validateFields((err, fieldsValue) => {
    if (err) return;
    const newFieldValue = fieldsValue;
    formValue = newFieldValue;
    console.log('表单内容', fieldsValue);
    });
    this.props.editOk(formValue);
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };
  cancel = () => {
    console.log(this.props)
    this.props.editCancel();
  };
  onFill = () => {
    this.formRef.current.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      // {...layout} 
      <Form ref={this.formRef} name="control-ref" onSubmit={(e) => this.onFinish(e)}>
        <FormItem
          name="name"
          label="组织名称"
          rules={[
            {
              required: true,
            },
          ]}
        >
          {getFieldDecorator('orgName', {
            rules: [
              {
                required: true,
                message: '组织名称不能为空!'
              },
            ],

          })(
            <Input type="text" placeholder="请输入组织名称..."></Input>
          )}
          {/* <Input></Input> */}
        </FormItem>
        {/* <FormItem
          name="code"
          label="组织编码"
          rules={[
            {
              required: true,
            },
          ]}
        >
          {getFieldDecorator('orgCode', {
            rules: [
              {
                required: true,
                message: '组织编码不能为空!'
              },
            ],

          })(
            <Input type="text" placeholder="请输入组织编码..."></Input>
          )}
        </FormItem> */}
        {/* <FormItem
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            onChange={this.onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </FormItem>
        <FormItem
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
          {({ getFieldValue }) =>
            getFieldValue('gender') === 'other' ? (
              <FormItem
                name="customizeGender"
                label="Customize Gender"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input></Input>
              </FormItem>
            ) : null
          }
        </FormItem> */}
        <div style={{ overflow: 'hidden', textAlign: 'right' }}>
          <div>
            <Button style={{ marginRight: 20 }} onClick={this.cancel}>
              取消
                </Button>
            <Button type="primary" htmlType="submit">
              确定
                </Button>
          </div>
        </div>
      </Form>
    );
  }
}

export default EditableItem;
// export default EditableItem = Form.create()(EditableItem);