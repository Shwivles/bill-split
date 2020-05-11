import React from 'react';

//bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Info() {
    return (
        <Container>
            <Row>
                <Col>
                    info 1 
                </Col>
                <Col>
                    info 2   
                </Col>
                <Col>
                    info 3 
                </Col>
            </Row>
        </Container>
    );
}

export default Info;