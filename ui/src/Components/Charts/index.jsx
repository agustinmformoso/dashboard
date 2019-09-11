import React from 'react'
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PieChartComponent from '../../Components/PieChartComponent';
import BarChartComponent from '../../Components/BarChartComponent';
import Percentage from '../../Components/Percentage';

const Charts = ({ pieChartData, barChartData1, barChartData2, colors, PieChartWidth, PieChartHeight, PieChartMargin, PieChartInnerRadius, PieChartOuterRadius, PieChartLabelLine, PieChartFill, BarChartWidth, BarChartHeight, BarChartMargin }) => {
    console.log(BarChartHeight)
    console.log(BarChartMargin)
    console.log(BarChartWidth)
    return (
        <Row className="charts">

            <Col md={3} className="chart-1">
                <PieChartComponent
                    pieChartData={pieChartData}
                    PieChartHeight={PieChartHeight}
                    PieChartWidth={PieChartWidth}
                    PieChartMargin={PieChartMargin}
                    PieChartInnerRadius = {PieChartInnerRadius}
                    PieChartOuterRadius = {PieChartOuterRadius}
                    PieChartLabelLine = {PieChartLabelLine}
                    PieChartFill = {PieChartFill}
                    /* colors={colors} */
                />
            </Col>

            
            <Col md={2} className="chart-2">
                <Percentage />
            </Col>
        

            <Col md={6} className="chart-3" >
                <BarChartComponent  
                    barChartData1={barChartData1}
                    barChartData2={barChartData2}
                    BarChartWidth = {BarChartWidth}
                    BarChartHeight = {BarChartHeight}
                    BarChartMargin = {BarChartMargin}
                />
            </Col>
        </Row>
    )
}

export default Charts;