import React from 'react';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from './Containers/Grid';
import Charts from './Containers/Charts';
import AccordionPanel from './Containers/AccordionPanel';
import Header from './Containers/Header';

const App = () => {
    return (
        <Container>
            <Header />
            <Row>
                <Col md={3} className="panel" >
                    <AccordionPanel />
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