import React from "react";
import { RiLineChartFill } from "react-icons/ri";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./chart.css";
const Chart = ({ data, dataKey }) => {
  return (
    <div className="chart">
      <div className="chartTitle">Income Trend</div>
      <div className="chartBody">
        <ResponsiveContainer width="100%" aspect={6 / 1}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />

            <Tooltip />
            <Legend />
            <Bar dataKey="income" barSize={20} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
