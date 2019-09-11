import React from 'react'
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PieChartComponent from '../../Components/PieChartComponent';
import BarChartComponent from '../../Components/BarChartComponent';
import Percentage from '../../Components/Percentage';

const Charts = ({ pieChartData, barChartData1, barChartData2, colors, width, height, margin, PieChartInnerRadius, PieChartOuterRadius, PieChartLabelLine, PieChartFill }) => {
    console.log(barChartData1)
    console.log(barChartData2)
    return (
        <Row className="charts">

            <Col md={3} className="chart-1">
                <PieChartComponent
                    pieChartData={pieChartData}
                    height={height}
                    width={width}
                    margin={margin}
                    /* colors={colors} */

                    PieChartInnerRadius = {PieChartInnerRadius}
                    PieChartOuterRadius = {PieChartOuterRadius}
                    PieChartLabelLine = {PieChartLabelLine}
                    PieChartFill = {PieChartFill}
                />
            </Col>

            
            <Col md={2} className="chart-2">
                <Percentage />
            </Col>
        

            <Col md={6} className="chart-3" >
                <BarChartComponent  
                    barChartData1={barChartData1}
                    barChartData2={barChartData2}
                />
            </Col>
        </Row>
    )
}

export default Charts;