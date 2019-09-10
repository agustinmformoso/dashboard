import React, { useState } from 'react';
import "./styles.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionItem from '../AccordionItem';
import data from '../../db/db.json';

const AccordionPanel = () => {
    const [expandTmView, setExpandTmView] = useState(false);
    const [expandSalesReportsView, setExpandSalesReportsView] = useState(false);
    const [expandSalesDayView, setExpandSalesDayView] = useState(false);

    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="cardHeader" onClick={() => setExpandTmView(!expandTmView)}>
                    Teammates
                    <img src='angle-down-solid.svg' alt="arrowdown" className={'arrowdown float-right ' + (expandTmView && 'expanded')} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="p-0">
                        <div>
                            {
                                data.teammates.map((t) => (
                                    <AccordionItem t={t} />
                                )
                                )}
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="cardHeader" onClick={() => setExpandSalesReportsView(!expandSalesReportsView)}>
                    Sales Reports
                    <img src='angle-down-solid.svg' alt="arrowdown" className={'arrowdown float-right ' + (expandSalesReportsView && 'expanded')} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2" className="cardHeader" onClick={() => setExpandSalesDayView(!expandSalesDayView)}>
                    Sales by Day
                    <img src='angle-down-solid.svg' alt="arrowdown" className={'arrowdown float-right ' + (expandSalesDayView && 'expanded')} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default AccordionPanel;