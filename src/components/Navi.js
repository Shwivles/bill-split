import React from 'react';

//bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navi() {
    
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>photo</Navbar.Brand>
            <Nav>
                <Nav.Item as="li">
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="#">How to Use</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default Navi;