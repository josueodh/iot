import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { Space, Table } from "antd";
import AdminLayout from "../../layouts/Admin";
import api from "../../services/api";
import { Title } from "./styles";
import { Link } from "react-router-dom";
interface Patient {
  id: string;
  name: string;
  phone: string;
}
const Dashboard: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  useEffect(() => {
    api.get("/patients").then((response) =>
      setPatients(
        response.data.map((patient: Patient) => ({
          id: patient.id,
          name: patient.name,
          phone: patient.phone,
        }))
      )
    );
  }, []);
  return (
    <AdminLayout>
      <Title title="Dashboard" />
      <Card
        title="Listagem de Pacientes"
        containerStyle={{ marginTop: "15px" }}
      >
        <Table
          dataSource={patients}
          rowKey={(patient) => patient.id}
          columns={[
            {
              title: "Nome",
              dataIndex: "name",
              key: "name",
            },
            {
              title: "Telefone",
              dataIndex: "phone",
              key: "phone",
            },
            {
              title: "Ações",
              key: "action",
              render: (patient, record) => (
                <Space size="middle">
                  <Link to={`profile/${patient.id}`}>Detalhes</Link>
                </Space>
              ),
            },
          ]}
        />
      </Card>
    </AdminLayout>
  );
};

export default Dashboard;
