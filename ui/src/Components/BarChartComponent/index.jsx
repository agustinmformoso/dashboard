import React from 'react';
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', pv: 4, fill: '#0d47a1',
  },
  {
    name: 'Page B', pv: 5, fill: '#4285F4',
  },
  {
    name: 'Page C', pv: 3, fill: '#00C851',
  },
  {
    name: 'Page D', pv: 1, fill: '#ffbb33',
  },
  {
    name: 'Page E', pv: 4, fill: '#ff4444',
  },
  {
    name: 'Page F', pv: 2, fill: '#e91e63',
  },
];

const BarChartComponent = () => {

  return (
    <BarChart
      width={400}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid vertical={false} />
      <XAxis hide={true} />
      <YAxis type="number" />
      <Tooltip />
      <Bar dataKey="pv"  />
    </BarChart>
    )
}

export default BarChartComponent;