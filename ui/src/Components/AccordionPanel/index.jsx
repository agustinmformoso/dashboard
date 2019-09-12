import React, { useState, useEffect } from 'react';
import "./styles.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionItem from '../AccordionItem';
import { GLOBAL } from '../../Config/global';

const AccordionPanel = ({ data }) => {
    const [expandTmView, setExpandTmView] = useState(false);
    const [expandSalesReportsView, setExpandSalesReportsView] = useState(false);
    const [expandSalesDayView, setExpandSalesDayView] = useState(false);
    const [fetchData, setFetchData] = useState([]);

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
        if (data.teammates.length > 0){
            setFetchData(data.teammates.map((teammates) => (
                <AccordionItem teammates={teammates} />
            )
            ))    
        } else {
            setFetchData("No hay registros");
        }
    }

    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="cardHeader" onClick={() => setExpandTmView(!expandTmView)}>
                    {GLOBAL.ACCORDION.OPTION1}
                    <img src='angle-down-solid.svg' alt="arrowdown" className={'arrowdown float-right ' + (expandTmView && 'expanded')} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="p-0">
                        <div>
<<<<<<< HEAD
                            {/* {
                                data.teammates.map((teammates) => (
                                    <AccordionItem teammates={teammates} />
                                )
                                )} */}
=======
                            {fetchData}
>>>>>>> 8d7f4b79b3a07d15947802f0c8c3fcee817a6d7d
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="cardHeader" onClick={() => setExpandSalesReportsView(!expandSalesReportsView)}>
                    {GLOBAL.ACCORDION.OPTION2}
                    <img src='angle-down-solid.svg' alt="arrowdown" className={'arrowdown float-right ' + (expandSalesReportsView && 'expanded')} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>{GLOBAL.ACCORDION.DEFAULT}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2" className="cardHeader" onClick={() => setExpandSalesDayView(!expandSalesDayView)}>
                    {GLOBAL.ACCORDION.OPTION3}
                    <img src='angle-down-solid.svg' alt="arrowdown" className={'arrowdown float-right ' + (expandSalesDayView && 'expanded')} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>{GLOBAL.ACCORDION.DEFAULT}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default AccordionPanel;