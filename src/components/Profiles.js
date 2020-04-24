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

    

    //map out users
    const userList = Object.keys(users.profile).map((person) => {
        if (person !== '') {
            return (
                <div>
                    <button key={person} onClick={() => dispatch(changeSelected(person))}>{person}</button>
                    <button onClick={() => dispatch(deleteProfile(person))}>Delete</button>
                </div>
            );
        }
    });

    return (
        <Container>
            <Row>
                <Col>
                    <div className='users'>
                        {userList}
                    </div>

                </Col>
                 
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
                        /> 

                        <Button variant="success" onClick={() => dispatch(addProfile())} >Add user</Button>
                    </InputGroup>
                </div>

                </Col>
            </Row>
        </Container>
    );
}

export default Profiles;