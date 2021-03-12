import React from "react";

import { Menu, Layout } from "antd";
import { DashboardFilled } from "@ant-design/icons";
import logoImg from "../../assets/logo.png";
import { FaList, FaUserEdit, FaAngleDoubleLeft } from "react-icons/fa";
import { LogoContainer, Image } from "./styles";
const { Sider } = Layout;
const Sidebar: React.FC = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <LogoContainer>
        <Image src={logoImg} alt="Iot" />
        IoT Health
      </LogoContainer>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="1" icon={<FaList />}>
          Lista de Pacientes
        </Menu.Item>
        <Menu.Item key="2" icon={<FaUserEdit />}>
          Novo Paciente
        </Menu.Item>
        <Menu.Item key="3" icon={<FaAngleDoubleLeft />}>
          Sair
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
