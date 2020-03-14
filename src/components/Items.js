import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addEntry from '../actions';

function Item() {
    const items = useSelector(state => state.itemReducer);
    const dispatch = useDispatch();

    const addItemEntry = () => {
        dispatch(addEntry());
    };

    //TODO: create id function

    //TODO: change iteration for object
    
    const entry = items.map((recieptItem, idx) => {
        return (
            <div className='item-data'>
                <input type='text' name='item-name' value={recieptItem.name} />
                <input type='number' name='item-price' value={recieptItem.price} min="0" />
                <input type='number' name='item-quantity' value={recieptItem.quantity} min='0' />
            </div>
        );
    });

    return(
        <div className='item-entry'>
            {entry}
            <button onClick={addItemEntry}>Add more items</button>
        </div>
    );
};

export default Item;
