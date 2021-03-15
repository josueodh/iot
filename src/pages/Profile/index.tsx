import React, { useState, useEffect, useMemo, useCallback } from "react";
import { format, parseISO } from "date-fns";
import Card from "../../components/Card";
import AdminLayout from "../../layouts/Admin";
import api from "../../services/api";
import { Title } from "./styles";
import { Col, Row, Select } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import {
  FaPrescriptionBottleAlt,
  FaRegChartBar,
  FaCalendarDay,
  FaEnvelopeSquare,
  FaBluetooth,
  FaFolderPlus,
} from "react-icons/fa";

import { Tabs } from "antd";
import ChartLine from "../../components/Charts/Line";
import ChartColumn from "../../components/Charts/Column";
import { useParams } from "react-router";
interface Patient {
  id: string;
  name: string;
  email: string;
  cep: string;
  street: string;
  phone: string;
  number: string;
  complement?: string;
  neighborhood: string;
  pathology: string;
  city: string;
  state: string;
  born_date: string;
  smartband: string;
  start: string;
  observation: string;
}

interface Measurement {
  id: string;
  temperature: number;
  heart_rate: number;
  arterial_frequency_min: number;
  arterial_frequency_max: number;
  blood_saturation: number;
  time: string;
  patient_id: string;
  created_at: string;
  updated_at: string;
}

interface Diary {
  id: string;
  date: string;
  walk: number;
  sleep: string;
}

const { TabPane } = Tabs;

const Profile: React.FC = () => {
  const { Option } = Select;
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient>({} as Patient);
  const [adress, setAdress] = useState<string>();
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [date, setDate] = useState();
  const [diaries, setDiaries] = useState<Diary[]>([]);
  useEffect(() => {
    api.get(`patients/${id}`).then((response) => setPatient(response.data));
  }, [id]);

  useEffect(() => {
    api
      .get(`measurements/chart/${id}`, {
        params: {
          date: "2021-03-11",
        },
      })
      .then((response) => setMeasurements(response.data));
  }, [id, date]);

  useEffect(() => {
    api
      .get(`diaries/chart/${id}`)
      .then((response) => setDiaries(response.data));
  }, [id]);
  useMemo(() => {
    const patientAdress = `${patient.street}, ${patient.number} - ${patient.neighborhood}, ${patient.city} - ${patient.state} - ${patient.cep}`;
    setAdress(patientAdress);
  }, [patient]);

  const dataTemperatures = useMemo(() => {
    return measurements.map((measurement: Measurement) => {
      return {
        temperature: measurement.temperature,
        time: format(parseISO(measurement.time), "HH:MM"),
      };
    });
  }, [measurements]);

  const dataHeart = useMemo(() => {
    return measurements.map((measurement: Measurement) => {
      return {
        heartbeat: measurement.heart_rate,
        time: format(parseISO(measurement.time), "HH:MM"),
        category: "Batimento",
      };
    });
  }, [measurements]);

  const dataBlood = useMemo(() => {
    return measurements.map((measurement: Measurement) => {
      return {
        blood: measurement.blood_saturation,
        time: format(parseISO(measurement.time), "HH:MM"),
      };
    });
  }, [measurements]);

  const dataArterial = useMemo(() => {
    const min = measurements.map((measurement: Measurement) => {
      return {
        arterial: measurement.arterial_frequency_min,
        time: format(parseISO(measurement.time), "HH:MM"),
        category: "Min",
      };
    });
    const max = measurements.map((measurement: Measurement) => {
      return {
        arterial: measurement.arterial_frequency_max,
        time: format(parseISO(measurement.time), "HH:MM"),
        category: "Max",
      };
    });
    return min.concat(max);
  }, [measurements]);

  const dataSleep = useMemo(() => {
    return diaries.map((diary: Diary) => {
      return {
        sleep: parseISO(diary.sleep),
        date: format(parseISO(diary.date), "dd/MM/yyyy"),
      };
    });
  }, [diaries]);

  const dataWalk = useMemo(() => {
    return diaries.map((diary: Diary) => {
      return {
        walk: diary.walk,
        date: format(parseISO(diary.date), "dd/MM/yyyy"),
      };
    });
  }, [diaries]);

  const handleChangeDateSelect = useCallback((value) => {
    setDate(value);
  }, []);
  return (
    <AdminLayout>
      <Title title={`Paciente: ${patient.name}`} />
      <Row className="info">
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 0 }}>
          <Card title="Informações" containerStyle={{ marginTop: "15px" }}>
            <p>
              <FaCalendarDay /> Data de Nascimento:{" "}
              <span>{patient.born_date}</span>
            </p>
            <hr />
            <p>
              <FaEnvelopeSquare /> Email: <span>{patient.email}</span>
            </p>
            <hr />

            <p>
              <HomeOutlined /> Endereço: <span>{adress}</span>
            </p>
            <hr />

            <p>
              <FaBluetooth /> Smartband: <span> {patient.smartband}</span>
            </p>
            <hr />

            <p>
              <FaRegChartBar /> Início Monitoramento:{" "}
              <span>
                <p>format(parseISO(patient.start), "HH:mm")</p>
              </span>
            </p>
            <hr />

            <p>
              <FaFolderPlus /> CID:{" "}
              <div>
                <p>patient.cid</p>
              </div>
            </p>
            <hr />

            <p>
              <FaPrescriptionBottleAlt /> Observações:{" "}
              <div>
                <p>{patient.observation}</p>
              </div>
            </p>
          </Card>
        </Col>
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 15, offset: 1 }}>
          <Card
            title={`Gráficos de Monitoramento`}
            containerStyle={{ marginTop: "15px" }}
            extra={
              <Select style={{ width: 120 }}>
                <Option value="jack">15/03/2021</Option>
                <Option value="2021-03-2021">13/03/2021</Option>
              </Select>
            }
          >
            <Tabs type="card">
              <TabPane tab="Temperatura" key="1">
                <ChartLine
                  data={dataTemperatures}
                  color={["#1979C9"]}
                  xField="time"
                  yField="temperature"
                  seriesField="category"
                />
              </TabPane>
              <TabPane tab="Pressão Arterial" key="2">
                <ChartLine
                  data={dataArterial}
                  color={["#1979C9"]}
                  xField="time"
                  yField="arterial"
                  seriesField="category"
                />
              </TabPane>
              <TabPane tab="Frequência Cardíaca" key="3">
                <ChartLine
                  data={dataHeart}
                  color={["#1979C9"]}
                  xField="time"
                  yField="heartbeat"
                  seriesField="category"
                />
              </TabPane>
              <TabPane tab="Saturação de Oxigênio - SPO2" key="4">
                <ChartLine
                  data={dataBlood}
                  color={["rgba(255,0,0,0.7)"]}
                  xField="time"
                  yField="blood"
                  seriesField="category"
                />
              </TabPane>
              <TabPane tab="Passos" key="5">
                <ChartColumn data={dataWalk} xField="date" yField="walk" />
              </TabPane>
              <TabPane tab="Sono" key="6">
                <ChartColumn data={dataSleep} xField="date" yField="walk" />
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default Profile;
