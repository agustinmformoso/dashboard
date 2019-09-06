import React from 'react';
import "./styles.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from './Containers/Grid';
import AccordionPanel from './Containers/AccordionPanel';

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
                    <AccordionPanel />
                </Col>

                <Col md={9}>
                    <Row>
                        <Col md={3} className="chart-1" >
                            <p>chart 1</p>
                        </Col>

                        <Col md={2} className="chart-2" >
                            <p>chart 2</p>
                        </Col>

                        <Col md={6} className="chart-3" >
                            <p>chart 3</p>
                        </Col>
                    </Row>

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