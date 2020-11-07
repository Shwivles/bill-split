import React from 'react';
import { Link } from 'react-router-dom';

//bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navi() {
    
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand as={Link} to="/">
                BSA
            </Navbar.Brand>
            <Nav as="ul">
                <Nav.Item as="li">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as={Link} to="/app">App</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default Navi;