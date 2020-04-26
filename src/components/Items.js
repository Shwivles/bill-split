import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEntry, handleEntry, addItemToProfile, deleteEntry} from '../actions';

//bootstrap
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Item() { 
    const items = useSelector(state => state.itemReducer);
    const user = useSelector(state => state.profileReducer);
    const dispatch = useDispatch();

    const handleChange = (e, idx) => {
        const data = [e.target.name, e.target.value];
        dispatch(handleEntry(data, idx));
    }

    /* 
    function will take in the itemkey and profile.selected state
    use the itemkey to pass in the object from item state into addItemToProfile dispatch
    no need to use profile id because selected should be the person entering
    */
    const handleProfileAdd = (key) => {
        const billItem = {...items[key]};
        //const userName = user.selected;

        console.log(user.selected);
        dispatch(addItemToProfile(billItem));
        //dispatch(updateEntry(userName, key));
    }

    const entry = Object.keys(items).map((itemKey) => {
        return (
            <div className='item-data'>
                <Container>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                            
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Item Name</InputGroup.Text> 
                                </InputGroup.Prepend>
                                
                                <FormControl 
                                    placeholder="Enter item name"
                                    aria-label="name"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                    name="name"
                                    value={items[itemKey].name}
                                    onChange={(e) => handleChange(e, itemKey)} />  
                            </InputGroup> 
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                            
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon2">Price</InputGroup.Text> 
                                    <InputGroup.Text>$</InputGroup.Text>
                                </InputGroup.Prepend>
                                
                                <FormControl 
                                    placeholder="0.00"
                                    aria-label="price"
                                    aria-describedby="basic-addon2"
                                    type="number"
                                    name="price"
                                    min="0"
                                    value={items[itemKey].price}
                                    onChange={(e) => handleChange(e, itemKey)} />  
                            </InputGroup> 
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                            
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon3">Shared</InputGroup.Text> 
                                </InputGroup.Prepend>
                                
                                <FormControl 
                                    placeholder="0"
                                    aria-label="quantity"
                                    aria-describedby="basic-addon3"
                                    type="number"
                                    name="quantity"
                                    min="0"
                                    value={items[itemKey].quantity}
                                    onChange={(e) => handleChange(e, itemKey)} />  
                            </InputGroup> 
                        </Col>
                    {/*
                    <input type='text' onChange={(e) => handleChange(e, itemKey)} name='name' value={items[itemKey].name} />
                    <input type='number' onChange={(e) => handleChange(e, itemKey)} name='price' value={items[itemKey].price} min="0" />
                    <input type='number' onChange={(e) => handleChange(e, itemKey)} name='quantity' value={items[itemKey].quantity} min='0' />
                    */}
                        <Col>
                            <Button variant="success" onClick={() => handleProfileAdd(itemKey)}>Select</Button>
                            <Button variant="danger" onClick={() => dispatch(deleteEntry(itemKey))}>Delete</Button>
                        </Col>
                    </Row>
                   
                </Container>
            </div>   
        );
    });

    return(
        <div className='item-entry'>
            {entry}
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex justify-content-center" >

                            <Button variant="primary" onClick={() => dispatch(addEntry())}>Add more items</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Item;
