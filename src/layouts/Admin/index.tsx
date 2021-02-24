import React from "react";
import { Layout } from "antd";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const { Content } = Layout;
const AdminLayout: React.FC = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#ecf0f5" }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
