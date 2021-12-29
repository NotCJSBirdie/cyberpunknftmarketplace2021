import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "S", stock: 400, pv: 2400, amt: 2400 },
    { name: "M", stock: 200, pv: 2400, amt: 2400 },
    { name: "T", stock: 100, pv: 2400, amt: 2400 },
    { name: "W", stock: 200, pv: 2400, amt: 2400 },
    { name: "T", stock: 300, pv: 2400, amt: 2400 },
    { name: "F", stock: 400, pv: 2400, amt: 2400 },
    { name: "S", stock: 300, pv: 2400, amt: 2400 },
  ];
  return (
    <ResponsiveContainer width="80%" height={250}>
      <BarChart width={730} height={250} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis tick={{ fill: "white" }} dataKey="name" />
        {/* <YAxis tick={{ fill: "white" }} /> */}
        <Tooltip />
        <Legend />
        <Bar dataKey="stock" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
