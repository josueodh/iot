import React from "react";

import { Menu, Layout } from "antd";
import {
  DashboardFilled,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
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
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
