import React from 'react'
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonComp from '../../Components/Button';

const Header = () => {
    return (
        <Row className="header my-2">
            <Col md={9} className="textContainer" >
                <p className="headerText">Sales | Name Lastname</p>
            </Col>

            <Col md={3} className="buttons" >
                <ButtonComp description="EXPORT TO PDF" variante="light"/>
                <ButtonComp description="SHARE" variante="primary"/>
            </Col>
        </Row>
    )
}

export default Header;