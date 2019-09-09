import React, { useState } from 'react';
import "./styles.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionItem from '../AccordionItem';
import data from '../../db/db.json';

const AccordionPanel = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="cardHeader">
                    Teammates
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
                <Accordion.Toggle as={Card.Header} eventKey="1" className="cardHeader">
                    Sales Reports
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2" className="cardHeader">
                    Sales by Day
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default AccordionPanel;