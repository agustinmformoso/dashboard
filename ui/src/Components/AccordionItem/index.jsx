import React from 'react'
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AccordionItem = ({ t }) => {
    return (
        <div className="itemContainer">
            <Row>
                <Col md={2} className="picContainer ml-4">
                    <img src='profilepic.jpg' alt="pic" className="profilePic" />
                </Col>
                <Col md={8} className="tmContainer ml-2">
                    <span>{t.name} {t.last_name}</span>
                    <p>{t.rol}</p>
                </Col>
            </Row>
        </div>
    )
}

export default AccordionItem;