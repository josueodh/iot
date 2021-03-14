import React from "react";
import { Line } from "@ant-design/charts";

interface ChartLineData {
  data: Array<Object>;
  color: Array<string>;
  xField: string;
  yField: string;
  seriesField?: string;
}
const ChartLine: React.FC<ChartLineData> = ({
  data,
  color,
  xField,
  yField,
  seriesField,
}) => {
  var config = {
    data,
    xField,
    yField,
    seriesField,
    color: [
      "#5B8FF9",
      "#5AD8A6",
      "#5D7092",
      "#F6BD16",
      "#E8684A",
      "#6DC8EC",
      "#9270CA",
      "#FF9D4D",
      "#269A99",
      "#FF99C3",
    ],
  };
  return <Line {...config} />;
};

export default ChartLine;
