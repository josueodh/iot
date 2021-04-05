import React, { useState, useEffect, useMemo, useCallback } from "react";
import { format, lightFormat, parseISO } from "date-fns";
import Card from "../../components/Card";
import AdminLayout from "../../layouts/Admin";
import api from "../../services/api";
import { Title } from "./styles";
import { Button, Col, Row, Select } from "antd";
import { DownloadOutlined, HomeOutlined } from "@ant-design/icons";
import {
  FaPrescriptionBottleAlt,
  FaRegChartBar,
  FaCalendarDay,
  FaEnvelopeSquare,
  FaBluetooth,
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
  start: Date;
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
  const [date, setDate] = useState<string>(format(new Date(), "yyyy-MM-dd"));
  const [days, setDays] = useState<string[]>([]);
  const [diaries, setDiaries] = useState<Diary[]>([]);
  useEffect(() => {
    api.get(`patients/${id}`).then((response) => setPatient(response.data));
  }, [id]);

  useEffect(() => {
    api
      .get(`measurements/chart/${id}`, {
        params: {
          date: date,
        },
      })
      .then((response) => {
        setMeasurements(response.data.measurements);
        setDays(response.data.days);
      });
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
      console.log(diary.sleep);
      return {
        sleep: diary.sleep,
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
    const breakDate = value.split("/");
    setDate(
      lightFormat(
        new Date(breakDate[2], breakDate[1] - 1, breakDate[0]),
        "yyyy-MM-dd"
      )
    );
  }, []);

  const handleDownloadExcel = useCallback(() => {
    api.get(`/excel/${id}`).then((response) => console.log(response));
  }, [id]);
  return (
    <AdminLayout>
      <Title title={`Paciente: ${patient.name}`} />
      <Row className="info">
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 0 }}>
          <Card title="Informações" containerStyle={{ marginTop: "15px" }}>
            <p>
              <FaCalendarDay /> Data de Nascimento: <span></span>
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
                {new Date(patient.start).getDate() +
                  "/" +
                  (new Date(patient.start).getMonth() - 1) +
                  "/" +
                  new Date(patient.start).getFullYear()}
              </span>
            </p>
            <hr />

            <p>
              <FaPrescriptionBottleAlt /> Observações:{" "}
              <div>
                <p>{patient.observation}</p>
              </div>
            </p>
            <Button
              type="primary"
              block
              icon={<DownloadOutlined />}
              onClick={handleDownloadExcel}
            >
              Download Excel Paciente
            </Button>
          </Card>
        </Col>
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 15, offset: 1 }}>
          <Card
            title={`Gráficos de Monitoramento`}
            containerStyle={{ marginTop: "15px" }}
            extra={
              <Select style={{ width: 120 }} onChange={handleChangeDateSelect}>
                {days.map((day: string) => (
                  <Option value={day}>{day}</Option>
                ))}
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
                <ChartColumn data={dataSleep} xField="date" yField="sleep" />
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default Profile;
