import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProfileEntry } from '../actions';

//bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

/*
display all items in selected profile list
when a person is selected display all items in their list
adding a item will add it to the display
*/
function List() {
    const profileState = useSelector(state => state.profileReducer);
    const dispatch = useDispatch();

    //check if selected is equal to the profile key (every render?)
    //display profile list
    //PROBLEM: array does not exist at first render UNSAFE
    const profileList = profileState.profile[profileState.selected].list.map((item, idx) => {
        return (
            <ListGroup.Item key={idx}>
                <ListGroup horizontal>
                    <ListGroup.Item>Item name: {item.name}</ListGroup.Item>
                    <ListGroup.Item>price: {item.price}</ListGroup.Item>
                    <ListGroup.Item>quantity: {item.quantity}</ListGroup.Item>

                    <Button variant="danger" onClick={() => dispatch(deleteProfileEntry(idx))}>Delete</Button>
                </ListGroup>
            </ListGroup.Item>
        );
    });

    const total = profileState.profile[profileState.selected].total;

    return (
        <Container>
            {profileState.selected === '' ?
                <p>Nothing in list or none added</p> :
                <ListGroup variant="flush">
                    <ListGroup.Item><h4>{profileState.selected}'s Items:</h4></ListGroup.Item>
                    {profileList}
                    <ListGroup.Item>Total: ${total}</ListGroup.Item>
                </ListGroup>
            }
        </Container>
    );
}

export default List;