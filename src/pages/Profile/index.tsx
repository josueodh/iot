import React, { useState, useEffect, useMemo } from "react";
import Card from "../../components/Card";
import AdminLayout from "../../layouts/Admin";
import api from "../../services/api";
import { Title } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useParams } from "react-router-dom";
import { Col, Row } from "antd";
import { HeatMapOutlined, PhoneFilled, HomeOutlined } from "@ant-design/icons";
import { FaBirthdayCake, FaMap } from "react-icons/fa";
import { format } from "date-fns";
interface Patient {
  id: string;
  name: string;
  cep: string;
  street: string;
  phone: string;
  number: string;
  complement?: string;
  neighborhood: string;
  pathology: string;
  city: string;
  state: string;
  born_date: Date;
}
const Profile: React.FC = () => {
  const [patient, setPatient] = useState({} as Patient);
  useEffect(() => {
    async function loadPatient(): Promise<void> {
      const response = await api.get(
        "patients/c55527f4-3c21-4338-a2e5-964798b571ee"
      );
      setPatient(response.data);
    }
    loadPatient();
  }, []);
  const formatedDate = useMemo(() => {
    return format(patient.born_date, "YYYY");
  }, [patient.born_date]);
  console.log(patient.born_date);
  console.log(patient.name);
  return (
    <AdminLayout>
      <Title title={`Perfil ${patient.name}`} />
      <Row>
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 5, offset: 0 }}>
          <Card title="Informações" containerStyle={{ marginTop: "15px" }}>
            <p>
              <PhoneFilled /> Telefone:{" "}
              <span style={{ float: "right" }}>{patient.phone}</span>
            </p>
            <hr />
            <p>
              <FaBirthdayCake /> Data de Nascimento:{" "}
              <span style={{ float: "right" }}>
                <li>
                  <ul>{patient.street}</ul>
                </li>
              </span>
            </p>
            <hr />
          </Card>
        </Col>
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 18, offset: 1 }}>
          <Card
            title={`${patient.name}`}
            containerStyle={{ marginTop: "15px" }}
          >
            <p>{patient.name}</p>
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default Profile;
