import React from 'react'
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PieChartComponent from '../../Components/PieChartComponent';
import BarChartComponent from '../../Components/BarChartComponent';
import Percentage from '../../Components/Percentage';

const Charts = () => {
    return (
        <Row>
            <Col md={3} className="chart-1" >
                <PieChartComponent />
            </Col>

            <Col md={2} className="chart-2" >
                <Percentage />
            </Col>

            <Col md={6} className="chart-3" >
                <BarChartComponent />
            </Col>
        </Row>
    )
}

export default Charts;