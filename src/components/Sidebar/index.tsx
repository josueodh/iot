import React from "react";

import { Menu, Layout } from "antd";
import { DashboardFilled } from "@ant-design/icons";
import logoImg from "../../assets/logo.png";
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
        <Menu.Item key="1" icon={<DashboardFilled />}>
          Dashboard
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
