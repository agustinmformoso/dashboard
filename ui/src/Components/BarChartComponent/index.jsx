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

const data2 = [
  {
    name: 'Page A', pv: 8, fill: '#0d47a1',
  },
  {
    name: 'Page B', pv: 7, fill: '#4285F4',
  },
  {
    name: 'Page C', pv: 5, fill: '#00C851',
  },
  {
    name: 'Page D', pv: 3, fill: '#ffbb33',
  },
  {
    name: 'Page E', pv: 2, fill: '#ff4444',
  },
  {
    name: 'Page F', pv: 1, fill: '#e91e63',
  },
];

const BarChartComponent = () => {

  return (
    <Row>
      <Col md={6}>
        <BarChart
          width={300}
          height={250}
          data={data}
          margin={{
            top: 0, right: 0, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis hide={true} />
          <YAxis type="number" />
          <Bar dataKey="pv" />
        </BarChart>
      </Col>
      <Col md={6}>
        <BarChart
          width={300}
          height={250}
          data={data2}
          margin={{
            top: 0, right: 0, left: 47, bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis hide={true} />
          <Bar dataKey="pv" />
        </BarChart>
      </Col>
    </Row>
  )
}

export default BarChartComponent;