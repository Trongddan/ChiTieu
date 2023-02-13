import React from "react";
import "./chart.scss";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Label,
  Tooltip
} from "recharts";
const Chart = () => {
  const data = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 500,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
  ];
  const data2 = [
    {
      total: 120,
      month: 1,
    },
    {
      total: 150,
      month: 2,
    },
    {
      total: 140,
      month: 3,
    },
    {
      total: 220,
      month: 4,
    },
    {
      total: 420,
      month: 5,
    },
    {
      total: 320,
      month: 6,
    },
    {
      total: 320,
      month: 7,
    },
  ];
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="chart-container">
      <div className="chart-content-left">
        <div className="chart-name">Biểu đồ chi tiêu ngày </div>
        <ResponsiveContainer width={"90%"} height={"80%"}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={"60%"}
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="left"
            ></Legend>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-content-right">
        <div className="chart-name">Biểu đồ chi tiêu ngày</div>
        <ResponsiveContainer width={"90%"} height={"80%"}>
          <LineChart
            width={730}
            height={250}
            data={data2}
            margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
          >
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="month" >
              <Label value="Tháng" position="bottom" color="#fff" />
            </XAxis>
            <YAxis
              label={{
                value: "chi tiêu",
                angle: -90,
                position: "insideLeft",
                color: "#fff",
              }}
            />

            <Legend verticalAlign="top" height={36} />
            <Line
              name="Biểu đồ chi tiêu theo tháng"
              type="monotone"
              dataKey="total"
              strokeWidth={2.2}
              stroke="#8884d8"
              activeDot={{ fill: "red", strokeWidth: 4, r: 5 }}
            />
            <Tooltip  />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
