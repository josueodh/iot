import React, { useState } from 'react';
import AdminLayout from "../../layouts/Admin";
import { Form, Input, InputNumber, Button, DatePicker, Divider } from 'antd';
import { Title } from "./styles";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} campo obrigatório',
  types: {
    email: '${label} não é um email válido',
    number: '${label} idade não é válida',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const CreatePatient: React.FC = () => {

  const onFinish = (values: any) => {
  console.log(values);

  };
 


  return (
    <AdminLayout>
      <Title title={`Cadastrar Novo Paciente`}/>
      <Divider />
       <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Nome" rules={[{ required: true }]}>
        <Input style={{ width: 400 }} />
      </Form.Item>
      
      <Form.Item name={['user', 'date']} label="Date de Nascimento" rules={[{ type: 'date', required: true }]} >
        <DatePicker />
      </Form.Item>

      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
        <Input style={{ width: 400 }}/>
      </Form.Item>
      <Form.Item name={['user', 'adress']} label="Endereço" rules={[{ required: true }]}>
        <Input style={{ width: 500 }}/>
      </Form.Item>
      
      <Form.Item name={['user', 'smartband']} label="Smartband" rules={[{ required: true }]}>
        <Input style={{ width: 500 }}/>
      </Form.Item>

      <Form.Item name={['user', 'stardate']} label="Início Monitoramento" rules={[{ type: 'date', required: true }]} >
        <DatePicker />
      </Form.Item>
      
      <Form.Item name={['user', 'cid']} label="CID" rules={[{ required: true }]}>
        <Input style={{ width: 300 }}/>
      </Form.Item>
      <Form.Item name={['user', 'observations']}  label="Observações" rules={[{ required: true }]}>
        <Input.TextArea style={{ width: 500}} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Cadastrar Paciente
        </Button>
      </Form.Item>
    </Form>
    </AdminLayout>
  );
};



export default CreatePatient;

