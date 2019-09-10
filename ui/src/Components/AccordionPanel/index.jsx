import React from 'react';
import "./styles.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionItem from '../AccordionItem';
import { GLOBAL } from '../../Config/global';

const AccordionPanel = ({data}) => {
    return (
        <Accordion defaultActiveKey="0" className="mt-3 mb-3" >
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="cardHeader">
                    {GLOBAL.ACCORDION.OPTION1}
                </Accordion.Toggle>                    
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="p-0">
                        <div>
                            {
                                data.teammates.map((teammates) => (
                                    <AccordionItem teammates={teammates} />
                                )
                                )}
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="cardHeader">
                    {GLOBAL.ACCORDION.OPTION2}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>{GLOBAL.ACCORDION.DEFAULT}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2" className="cardHeader">
                    {GLOBAL.ACCORDION.OPTION3}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>{GLOBAL.ACCORDION.DEFAULT}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default AccordionPanel;