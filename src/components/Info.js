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
                    <h4>Entering reciept items</h4>
                    <p>Enter reciept items into the inputs.</p>
                    <p>Enter a number greater than 0 if an item is to be shared (number is the amount of people sharing).</p>
                    <p>Click the add more items button to create more inputs</p>
                </Col>
                <Col>
                    <h4>Adding profiles</h4>
                    <p>Use this input to enter a peron's name.</p>
                    <p>Their profile will be created and clickable once entered. </p>
                </Col>
                <Col>
                    <h4>Creating a bill for each user</h4>
                    <p>Once a profile is selected, press select on an item to add it to a personal bill.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Info;