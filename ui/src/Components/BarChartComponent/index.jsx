import React from 'react';
import "./styles.css";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', pv: 4, fill: 'blue',
  },
  {
    name: 'Page B', pv: 5, fill: 'lightblue',
  },
  {
    name: 'Page C', pv: 3, fill: 'green',
  },
  {
    name: 'Page D', pv: 1, fill: 'orange',
  },
  {
    name: 'Page E', pv: 4, fill: 'red',
  },
  {
    name: 'Page F', pv: 2, fill: 'pink',
  },
];

const BarChartComponent = () => {

  return (
    <>
    <BarChart
      width={400}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid vertical={false} />
      <XAxis dataKey="name" />
      <YAxis  />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv"  />
    </BarChart>

      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" />
      </BarChart>
    </>
    )
}

export default BarChartComponent;