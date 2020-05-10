import React from 'react';
import List from '../components/List';
import Item from '../components/Items';
import Profiles from '../components/Profiles';
import Nav from '../components/Nav';

//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Home() {
    return(
        <div>
        <Nav />
        <Container>
            <Row>
                <Item />
            </Row>
            <Row>
                <Profiles />
            </Row>
            <Row>
                <List />
            </Row>
        </Container>

        </div>
    );
};

export default Home;