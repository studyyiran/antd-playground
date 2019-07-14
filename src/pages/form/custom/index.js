import {Form, Input, Select, Button, Tooltip, Icon} from 'antd';
import './index.scss'
import React from 'react'
import PriceInput from '../customInput'
import Textarea from '../../../components/zao/textarea'

function Demo (props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      callback();
      return;
    }
    callback('Price must greater than zero!');
  };

  const list = [
    {
      name: 'name',
      title: '姓名',
      emptyMessage: '需要输入姓名',
      placeholder: '请输入真实姓名'
    },
    {
      name: 'school',
      title: '学校',
      emptyMessage: '需要输入姓名',
      placeholder: '请输入真实姓名'
    },
    {
      name: 'major',
      title: '专业',
      emptyMessage: '需要输入姓名',
      placeholder: '请输入真实姓名'
    },
    {
      name: 'grade',
      title: '年级',
      children: <Select>
        <Select.Option value="rmb">RMB</Select.Option>
        <Select.Option value="dollar">Dollar</Select.Option>
      </Select>,
      emptyMessage: '请选择年级',
      placeholder: '请选择'
    },
    {
      name: 'location',
      title: '所在地',
      emptyMessage: '需要输入姓名',
      placeholder: '请输入真实姓名'
    },
    {
      name: 'phone',
      title: '联系电话',
      emptyMessage: '需要输入姓名',
      placeholder: '请输入真实姓名'
    },
    {
      name: 'emergencyContact',
      title: '紧急联系人',
      emptyMessage: '需要输入姓名',
      placeholder: '请输入真实姓名'
    },
    {
      name: 'emergencyContactNum',
      title: '紧急联系电话',
      emptyMessage: '需要输入姓名',
      placeholder: '请输入真实姓名'
    },
    {
      name: 'personalProfile',
      title: '一句话自我介绍',
      children: <TestInput />,
      emptyMessage: '需要输入姓名',
      placeholder: '请输入真实姓名'
    },
  ]


  const { getFieldDecorator } = props.form;
  return (
    <div>
      <Form layout="vertical" onSubmit={handleSubmit} hideRequiredMark={true}>
        <div className={'my'} >
          <div>
            <Form.Item label="姓名">
              {getFieldDecorator('nickname', {
                rules: [{ required: true, message: '需要输入姓名', whitespace: true }],
              })(<Input placeholder="请输入真实姓名" />)}
            </Form.Item>
            <Form.Item label="专业1">
              {getFieldDecorator('zhuanye', {
                rules: [{ required: true, message: '需要输入专业', whitespace: true }],
              })(<Input placeholder="请输入所读专业" />)}
            </Form.Item>
          </div>
          <div>
            <Form.Item label="专业2">
              {getFieldDecorator('3', {
                rules: [{ required: true, message: '需要输入专业', whitespace: true }],
              })(<Select>
                <Select.Option value="rmb">RMB</Select.Option>
                <Select.Option value="dollar">Dollar</Select.Option>
              </Select>)}
            </Form.Item>
          </div>
        </div>
        <Form.Item>
          {getFieldDecorator('test', {
            initialValue: { test1: 'abc', test2: 'def' },
            rules: [{  required: true, message: 'Please input your nickname!', whitespace: true  }],
          })(<TestInput />)}
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

/*

        <Form.Item label="Price">
          {getFieldDecorator('price1', {
            initialValue: { number: 0, currency: 'rmb' },
            rules: [{ validator: checkPrice }],
          })(<PriceInput />)}
        </Form.Item>
 */

class TestInput extends React.Component {
  // return <Textarea type="input" maxLength={20} onChange={(value) => {handler({hobby: value})}}>
  //         <div className="textarea-title-container">
  //           <h2>我的爱好：</h2>
  //           <Textarea.WordsCount className="count"/>
  //         </div>
  //         <Textarea.TextareaInput />
  //       </Textarea>
  render() {
    const {onChange, value} = this.props
    console.log(value)
    return <Textarea type="input" onChange={onChange} maxLength={20} >
      <div>
        <Textarea.WordsCount />
      </div>
      <Textarea.TextareaInput />
    </Textarea>
  }
}

const WrappedDemo = Form.create({ name: 'customized_form_controls' })(Demo);

export default WrappedDemo