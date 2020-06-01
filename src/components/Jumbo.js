import React from 'react';
import { Link } from 'react-router-dom';

//bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Jumbo = () => {
    return (
        <Jumbotron>
            <h1>Bill split app</h1>
            <p>An app used to calculate your bill</p>
            <p>Built for friends!</p>
            <Link to="/app"><Button variant="primary">Get Started</Button></Link>
            
        </Jumbotron>
    );
}


export default Jumbo;

