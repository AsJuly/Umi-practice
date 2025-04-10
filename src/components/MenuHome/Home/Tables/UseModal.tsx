import { Modal, Button, Checkbox, Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useEffect } from 'react';
// import styles from './index.less'
const UseModal = (propos: { record: any; handleCancel?: any; open?: any; onFinish?: any; }) => {
  const {open,onFinish,record} = propos
  const [form] = Form.useForm()

  const onOk = ()=>{
    form.submit()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if(record === undefined){
      form.resetFields();
    }else{
      form.setFieldsValue(propos.record)  //此时 使用这个 控制台会报错 需要进行一个预渲染 再modal里面 写一个 forceRender 属性
    }
  }, [open])

  return (
    <div>
      <Modal title="Basic Modal" forceRender okText="确认"
        cancelText="取消" open={open} onOk={onOk} onCancel={propos.handleCancel}>
        {/* <p>{propos.record.key}</p> */}
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={record}
          onFinish={onFinish}        //表单成功回调
          onFinishFailed={onFinishFailed}  //表单失败回调
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="createTime"
            name="createtime"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div >
  )
}

export default UseModal
