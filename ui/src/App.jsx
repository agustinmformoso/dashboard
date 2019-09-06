import React from 'react'
import "./styles.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
    return (
        <Container>
            <Row>
                <Col md={9} className="header" >
                    
                </Col>
                
                <Col md={3} className="buttons" >
                    
                </Col>
            </Row>

            <Row>
                <Col md={3} className="panel" >
                    
                </Col>

                <Col md={9}>
                    <Row>
                        <Col md={3} className="chart-1" >
                        
                        </Col>

                        <Col md={2} className="chart-2" >
                        
                        </Col>

                        <Col md={6} className="chart-3" >
                        
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12} className="grid" >

                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default App
