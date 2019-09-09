import React from 'react'
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AccordionItem = ({ t }) => {
    return (
        <div className="itemContainer p-2">
            <Row>
                <Col md={3} className="picContainer ml-3">
                    <img src='profilepic.jpg' alt="pic" className="profilePic" />
                </Col>
                <Col md={8} className="tmContainer">
                    <span>{t.name} {t.last_name}</span>
                    <p>{t.rol}</p>
                </Col>
            </Row>
        </div>
    )
}

export default AccordionItem;