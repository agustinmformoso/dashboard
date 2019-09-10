import React from 'react';
import "./styles.css";
import {
    PieChart, Pie, Sector, Cell,
  } from 'recharts';

  const data = [
    { name: 'Group A', value: 17 },
    { name: 'Group B', value: 23 },
    { name: 'Group C', value: 11 },
    { name: 'Group D', value: 5 },
    { name: 'Group E', value: 22 },
    { name: 'Group F', value: 19 },
  ];
  
  const COLORS = ['#0d47a1', '#4285F4', '#00C851', '#ffbb33', '#ff4444', '#e91e63'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index, value
  }) => {
     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {value}
      </text>
    );
  };

const PieChartComponent = () => {
    
    return (
      <PieChart
        width={400}
        height={400}
        margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        innerRadius={40}
        outerRadius={100}
        dataKey="value"
      >
        {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
    </PieChart>
    )
}

export default PieChartComponent;