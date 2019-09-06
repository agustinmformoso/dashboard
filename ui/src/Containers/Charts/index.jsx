import React from 'react'
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Charts = () => {
    return (
        <Row>
            <Col md={3} className="chart-1" >
                <p>chart 1</p>
            </Col>

            <Col md={2} className="chart-2" >
                <p>chart 2</p>
            </Col>

            <Col md={6} className="chart-3" >
                <p>chart 3</p>
            </Col>
        </Row>
    )
}

export default Charts;