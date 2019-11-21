import { Form, Input, Select } from 'antd'
import { FormComponentProps } from 'antd/es/form';
import React ,{useImperativeHandle}from 'react';
interface IUserFormProps extends FormComponentProps {
  cRef:any,
  form:any
}
const Option = Select.Option
const MyForm = (props: IUserFormProps) => {
  useImperativeHandle(props.cRef, () => ({
    focus: () => {
      const regInfo = getFieldsValue();
      return regInfo
    }
  }));

  const { getFieldDecorator,getFieldsValue, getFieldError, isFieldTouched } = props.form;

  const handleSelectChange = (value:string[]) => {
    console.log(value)
  }

  const usernameError = isFieldTouched('username') && getFieldError('username');
  const passwordError = isFieldTouched('age') && getFieldError('age');
  const address = isFieldTouched('address') && getFieldError('address')
  return (<Form layout="inline">
    <Form.Item label="姓名" validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
      {getFieldDecorator('username', {
        rules: [{ required: true, message: '请输入姓名!' }],
      })(
        <Input
          placeholder="请输入姓名"
        />,
      )}
    </Form.Item>
    <Form.Item label="年龄" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
      {getFieldDecorator('age', {
        rules: [{ required: true, message: '请输入年龄' }],
      })(
        <Input
          type="number"
          placeholder="请输入年龄"
        />
      )}
    </Form.Item>
    <Form.Item label="地址" validateStatus={address ? 'error' : ''}>
      {getFieldDecorator('address', {
        rules: [{ required: true, message: '请输入地址!' }],
      })(
        <Input
          placeholder="请输入地址"
        />
      )}
    </Form.Item>
    <Form.Item label="标签" style={{width:'100%'}}>
      {getFieldDecorator('tags', {
        rules: [{ required: true, message: '请选择标签!' }],
      })(
        <Select
          style={{ width: '180px' }}
          placeholder="请选择标签"
          onChange={handleSelectChange}
          mode="multiple"
        >
          <Option value="male">male</Option>
          <Option value="nice">nice</Option>
          <Option value="cool">cool</Option>
          <Option value="develor">develor</Option>
          <Option value="teacher">teacher</Option>
        </Select>,
      )}
    </Form.Item>
  </Form>)
}
export default  Form.create<IUserFormProps>({})(MyForm);