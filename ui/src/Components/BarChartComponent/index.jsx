import React from 'react';
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from 'recharts';



const BarChartComponent = ({ barChartData1, barChartData2 }) => {
  console.log(barChartData1)
  console.log(barChartData2)

  return (
    <Row>
      <Col md={6}>
        <BarChart
          width={300}
          height={250}
          data={barChartData1}
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
          data={barChartData2}
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