import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const data = [
  { name: 0, uv: 400 },
  { name: 0, uv: 300 },
  { name: 7, uv: 200 },
  { name: 0, uv: 278 },
  { name: 1, uv: 189 },
];

const renderCustomAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-45)">
        {payload.value}
      </text>
    </g>
  );
};

const renderCustomBarLabel = ({ x, y, width, value }) => {
  return (
    <text x={x + width / 2} y={y} fill="#666" dy={-6} textAnchor="middle">
      {value}
    </text>
  );
};

const MyBarChart = () => {
  return (
    <BarChart width={290} height={200} data={data}>
      <XAxis dataKey="name" tick={renderCustomAxisTick} />
      <YAxis />
      <Bar dataKey="uv" barSize={30} fill="#2C333E" label={renderCustomBarLabel} />
    </BarChart>
  );
};

export default MyBarChart;
