import { Column } from "@ant-design/charts";

interface ChartColumnData {
  data: Array<Object> | [];
  xField: string;
  yField: string;
}

const ChartColumn: React.FC<ChartColumnData> = ({ data, yField, xField }) => {
  var config = {
    data,
    xField,
    yField,
    columnWidthRatio: 0.8,
    meta: {
      type: { alias: "类别" },
      value: { alias: "销售额" },
    },
  };
  return <Column {...config} />;
};

export default ChartColumn;
