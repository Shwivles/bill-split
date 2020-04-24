import React from 'react';
import List from '../components/List';
import Item from '../components/Items';
import Profiles from '../components/Profiles';

//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Home() {
    return(
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
    );
};

export default Home;