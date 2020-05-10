import React from 'react';

//bootstrap
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
    return (
        <Navbar bg="light" variant="light">
            <Nav>
                <Nav.link href="#">Home</Nav.link>
                <Nav.link href="#">About</Nav.link>
            </Nav>
        </Navbar>
    );
}

export default Nav;