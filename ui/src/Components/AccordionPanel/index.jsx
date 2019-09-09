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
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Teammates
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
<<<<<<< HEAD


                    <Card.Body>Hello! I'm the body</Card.Body>
=======
                    <Card.Body>
                        <div>
                            {
                                data.teammates.map((t) => (
                                    <AccordionItem t={t} />
                                )
                                )}
                        </div>
                    </Card.Body>
>>>>>>> 6c5c956010c89151079021b590bc3bea6a60a0cc
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    Sales Reports
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
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