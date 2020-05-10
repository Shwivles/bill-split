import React from 'react';

//bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navi() {
    /*
    return (
        <Navbar bg="light" variant="light">
            <Nav>
                <Nav.item as="li">
                    <Nav.link href="#home">Home</Nav.link>
                </Nav.item>
                <Nav.item as="li">
                    <Nav.link eventKey="link-1">About</Nav.link>
                </Nav.item>
            </Nav>
        </Navbar>
    );
    */
    return (
        <Navbar bg="light" variant="light">
            <Nav>
                <Nav.Item as="li">
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="#">About</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default Navi;