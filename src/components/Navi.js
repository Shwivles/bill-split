import React from 'react';
import { Link } from 'react-router-dom';

//bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navi() {
    
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>photo</Navbar.Brand>
            <Nav>
                <Nav.Item as="li">
                    <Nav.Link>
                        <Link to="/">Home</Link>
                    
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link>
                        <Link to="/app">App</Link>     
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default Navi;