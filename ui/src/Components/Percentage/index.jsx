import React from 'react';
import "./styles.css";
import {
    PieChart, Pie, Sector, Cell,
  } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Percentage = () => {
    
    return (
        <div className="text-center">
            <span className="customer-satisfaction" >95%</span>
            <p className="caption-percentage">Customer satisfaction</p>

            <span className="target-sales" >95%</span>
            <p className="caption-percentage">Target sales</p>
        </div>
    )
}

export default Percentage;