import React, { useCallback } from "react";

import { Input, Form } from "antd";
import { Button, Image, Content } from "./styles";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo.png";
import api from "../../services/api";
import { useAuth } from "../../hooks/auth";

interface IFormInput {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const { signIn } = useAuth();
  const { register } = useForm();
  const handleFinish = useCallback(
    async (data: IFormInput) => {
      try {
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        console.log(err);
        return;
      }
    },
    [signIn]
  );
  return (
    <Content>
      <Form onFinish={handleFinish}>
        <Image src={logo} alt="Logo" />
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Digite seu nome o e-mail",
            },
            {
              type: "email",
              message: "O campo deve ser um e-mail",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="E-mail"
            ref={register}
            name="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Digite sua senha",
            },
            {
              min: 6,
              message: "A senha deve conter no mínimo 6 caracteres",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Senha"
            name="password"
            ref={register}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
};

export default Login;
