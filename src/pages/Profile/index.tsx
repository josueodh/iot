import React, { useState, useEffect, useMemo } from "react";
import Card from "../../components/Card";
import AdminLayout from "../../layouts/Admin";
import api from "../../services/api";
import { Title } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useParams } from "react-router-dom";
import { Col, Row } from "antd";
import { HeatMapOutlined, PhoneFilled, HomeOutlined } from "@ant-design/icons";
import {  FaPrescriptionBottleAlt, FaRegChartBar, FaCalendarDay, FaEnvelopeSquare, FaBluetooth, FaFolderPlus} from "react-icons/fa";
import { format } from "date-fns";
import { Tabs } from 'antd';
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

const { TabPane } = Tabs;



const Profile: React.FC = () => {
  return (
    <AdminLayout>
      <Title title={`Paciente: {patient.name}`} />
      <Row className='info'>
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 5, offset: 0 }}>
          <Card title="Informações" containerStyle={{ marginTop: "15px" }}>
            <p>
              <FaCalendarDay /> Data de Nascimento:{" "}
              <span style={{ float: "right" }}>patient.date</span>
            </p>
            <hr />
            <p>
            <FaEnvelopeSquare /> Email:{" "}
              <span style={{ float: "right" }}>patient.email</span>
            </p>
            <hr />
            <p>
            <HomeOutlined /> Endereço:{" "}
              <span style={{ float: "right" }}>patient.street</span>
            </p>
            <hr />
            <p>
            <FaBluetooth /> Smartband:{" "}
              <span style={{ float: "right" }}>patient.smartband</span>
            </p>
            <hr />
            <p>
            <FaRegChartBar /> Início Monitoramento:{" "}
              <span style={{ float: "right" }}><p>patient.start</p></span>
            </p>
            <hr />
            <p>
            <FaFolderPlus /> CID:{" "}
              <div style={{ float: "right" }}><p>patient.cid</p>
              </div>
            </p>
            
            <p>
            <FaPrescriptionBottleAlt /> Observações:{" "}
              <div style={{ float: "right" }}><p>patient.observations Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellendus quae aliquam unde voluptatem atque molestias eius ratione quidem quo, eveniet voluptatum animi necessitatibus dolorem consequuntur quod deleniti cupiditate nostrum?</p>
              </div>
            </p>
          </Card>
        </Col>
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 18, offset: 1 }}>
          <Card title={`Gráficos de Monitoramento`} containerStyle={{ marginTop: "15px" }}>
                        
            <Tabs type="card">
              <TabPane tab="Temperatura" key="1">
              temperature
              </TabPane>
              <TabPane tab="Frequência Arterial" key="2">
              arterial_frequency_min
              </TabPane>
              <TabPane tab="Frequência Cardíaca" key="3">
              heart_rate
              </TabPane>
              <TabPane tab="Oxigenação do Sangue" key="4">
              blood_saturation
              </TabPane>
            </Tabs>

          </Card>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default Profile;
