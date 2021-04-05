/* eslint-disable no-template-curly-in-string */
import React from "react";
import AdminLayout from "../../layouts/Admin";
import { Form, Input, Button, DatePicker, Divider } from "antd";
import { Title } from "./styles";
import api from "../../services/api";
import { useHistory } from "react-router";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: "${label} campo obrigatório",
  types: {
    email: "${label} não é um email válido",
    number: "${label} idade não é válida",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const CreatePatient: React.FC = () => {
  const history = useHistory();
  const onFinish = async (values: any) => {
    await api.post("/patients", values);
    history.push("/dashboard");
  };

  return (
    <AdminLayout>
      <Title title={`Cadastrar Novo Paciente`} />
      <Divider />
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name={"name"} label="Nome" rules={[{ required: true }]}>
          <Input style={{ width: 400 }} />
        </Form.Item>
        <Form.Item name={"cpf"} label="CPF" rules={[{ required: true }]}>
          <Input style={{ width: 400 }} />
        </Form.Item>
        <Form.Item name={"phone"} label="Telefone" rules={[{ required: true }]}>
          <Input style={{ width: 400 }} />
        </Form.Item>
        <Form.Item
          name={"born_date"}
          label="Data de Nascimento"
          rules={[{ type: "date", required: true }]}
        >
          <DatePicker style={{ width: 400 }} />
        </Form.Item>
        <Form.Item
          name={"email"}
          label="Email"
          rules={[{ type: "email", required: true }]}
        >
          <Input style={{ width: 400 }} />
        </Form.Item>
        <Form.Item name={"cep"} label="Cep" rules={[{ required: true }]}>
          <Input style={{ width: 400 }} />
        </Form.Item>
        <Form.Item name={"street"} label="Rua" rules={[{ required: true }]}>
          <Input style={{ width: 400 }} />
        </Form.Item>
        <Form.Item name={"number"} label="Número" rules={[{ required: true }]}>
          <Input style={{ width: 400 }} />
        </Form.Item>
        <Form.Item name={"complement"} label="Complemento">
          <Input style={{ width: 400 }} />
        </Form.Item>
        <Form.Item
          name={"neighborhood"}
          label="Bairro"
          rules={[{ required: true }]}
        >
          <Input style={{ width: 400 }} />
        </Form.Item>
        <Form.Item name={"city"} label="Cidade" rules={[{ required: true }]}>
          <Input style={{ width: 400 }} />
        </Form.Item>
        <Form.Item name={"state"} label="Estado" rules={[{ required: true }]}>
          <Input style={{ width: 400 }} />
        </Form.Item>
        <Form.Item name={"smartband"} label="Smartband">
          <Input style={{ width: 400 }} />
        </Form.Item>
        <Form.Item name={"pathology"} label="Condição de Saúde">
          <Input style={{ width: 400 }} />
        </Form.Item>
        <Form.Item
          name={"stardate"}
          label="Início Monitoramento"
          rules={[{ type: "date", required: true }]}
        >
          <DatePicker style={{ width: 400 }} />
        </Form.Item>
        <Form.Item name={"observation"} label="Observações">
          <Input.TextArea style={{ width: 400 }} />
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
