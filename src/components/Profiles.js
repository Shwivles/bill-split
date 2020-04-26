import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput, addProfile, changeSelected, deleteProfile } from '../actions';

//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Profiles() {
    /*
        grab item state
        make profile state
        select profile
        press button and pass in item state key
            grab data from item state using key
            enter into profile state
        calculate cost

    */
    const users = useSelector(state => state.profileReducer);
    const dispatch = useDispatch();

    const handleChange = (value) => {
        dispatch(updateInput(value));
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            dispatch(addProfile());
        }
    }

    

    //map out users
    const userList = Object.keys(users.profile).map((person) => {
        if (person !== '') {
            return (

                <Col className="mb-2">
                    <ButtonGroup size="lg" vertical>
                        <Button variant="secondary" key={person} onClick={() => dispatch(changeSelected(person))}>{person}</Button>
                            
                        <Button variant="danger" onClick={() => dispatch(deleteProfile(person))}>Delete</Button>

                    </ButtonGroup>
                    
                </Col>


            );
        }
    });

    return (
        <Container>
            <Row className="mt-3 users">
                {userList}
            </Row>
            <Row>
                <Col>

                <div className='profile-input'>
                    <InputGroup className="mt-3 mb-3">
                        <FormControl 
                            type="text"
                            onChange={(e) => handleChange(e.target.value)} 
                            placeholder="Enter a user's name"
                            name="profile-name"
                            value={users.input}
                            onKeyPress={(e) => handleKeyPress(e)}
                        /> 

                        <Button variant="success" onClick={() => dispatch(addProfile())}>Add user</Button>
                    </InputGroup>
                </div>

                </Col>
            </Row>
        </Container>
    );
}

export default Profiles;