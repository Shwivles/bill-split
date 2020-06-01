import React from 'react';
import List from '../components/List';
import Item from '../components/Items';
import Profiles from '../components/Profiles';
import Navi from '../components/Navi';

//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function AppPage() {
    return(
        <div>

        <Navi />
        <Container>

            <br />
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

export default AppPage;