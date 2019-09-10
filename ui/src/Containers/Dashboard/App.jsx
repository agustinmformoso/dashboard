import React from 'react';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from '../../Components/Grid';
import Charts from '../../Components/Charts';
import AccordionPanel from '../../Components/AccordionPanel';
import Header from '../../Components/Header';
import data from '../../db/db.json';

const App = () => {
    return (
        <Container fluid={true}>
            <Header />
            <Row>
                <Col md={3} className="panel" >
                    <AccordionPanel data={data} />
                </Col>

                <Col md={9}>
                    {/* <Charts data={} with={} height={} margin={} /> */}

                    <Row>
                        <Col md={12} className="grid" >
                            {/* <Grid data={data}/> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default App;