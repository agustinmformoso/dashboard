import React, { useState } from "react";
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// props:
// teammates = array "dfjsdklfjsdlk"

const AccordionItem = ({ teammates }) => {
    return (
   
            <Row className="itemContainer">
                <Col md={2} className="picContainer ml-4 mt-2">
                    <img src='profilepic.jpg' alt="pic" className="profilePic" />
                </Col>
                <Col md={8} className="tmContainer ml-2">
                    <span>{teammates.name} {teammates.last_name}</span>
                    <p>{teammates.rol}</p>
                </Col>
            </Row>
   
    )
}

export default AccordionItem;