import { Space } from "antd";
import React from "react";
import Card from "../../components/Card";
import Table from "../../components/Table";
import AdminLayout from "../../layouts/Admin";
import { Title } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <AdminLayout>
      <Title title="Dashboard" />
      <Card
        title="Listagem de Pascientes"
        containerStyle={{ marginTop: "15px" }}
      >
        <Table />
      </Card>
    </AdminLayout>
  );
};

export default Dashboard;
