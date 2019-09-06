import React from 'react'
import "./styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonComp from '../../Components/Button';

const Header = () => {
    return (
        <Row>
            <Col md={9} className="header" >
                <p>Sales</p>
            </Col>

            <Col md={3} className="buttons" >
                <ButtonComp description="EXPORT TO PDF" />
                <ButtonComp description="SHARE" />
            </Col>
        </Row>
    )
}

export default Header;