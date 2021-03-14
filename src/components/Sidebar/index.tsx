import React from "react";

import { Menu, Layout } from "antd";
import { DashboardFilled } from "@ant-design/icons";
import logoImg from "../../assets/logo.png";
import { FaList, FaUserEdit, FaAngleDoubleLeft } from "react-icons/fa";
import { LogoContainer, Image } from "./styles";
import { Link } from "react-router-dom";
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
        <Link to="/dashboard">
          <Image src={logoImg} alt="Iot" />
          IoT Health
        </Link>
      </LogoContainer>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="1" icon={<FaList />}>
          <Link to="/dashboard">Lista de Pacientes</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FaUserEdit />}>
          <Link to="/create">Novo Paciente</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<FaAngleDoubleLeft />}>
          Sair
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
