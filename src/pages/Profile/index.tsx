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
  return (
    <AdminLayout>
      <Title title={`Perfil {patient.name}`} />
      <Row>
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 5, offset: 0 }}>
          <Card title="Informações" containerStyle={{ marginTop: "15px" }}>
            <p>
              <PhoneFilled /> Telefone:{" "}
              <span style={{ float: "right" }}>patient.phone</span>
            </p>
            <hr />
            <p>
              <FaBirthdayCake /> Data de Nascimento:{" "}
              <span style={{ float: "right" }}>
                <li>
                  <ul>patient.street</ul>
                </li>
              </span>
            </p>
            <hr />
          </Card>
        </Col>
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 18, offset: 1 }}>
          <Card title={`{patient.name}`} containerStyle={{ marginTop: "15px" }}>
            <p>patient.name</p>
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default Profile;
