import React from 'react';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from './Containers/Grid';
import Charts from './Containers/Charts';

const App = () => {
    return (
        <Container>
            <Row>
                <Col md={9} className="header" >
                    <p>header</p>
                </Col>
                
                <Col md={3} className="buttons" >
                    <p>buttons</p>
                </Col>
            </Row>

            <Row>
                <Col md={3} className="panel" >
                    <p>panel</p>
                </Col>

                <Col md={9}>
                    <Charts />

                    <Row>
                        <Col md={12} className="grid" >
                            <Grid />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default App;