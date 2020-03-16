import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addEntry from '../actions';
import handleEntry from '../actions';

function Item() { 
    const items = useSelector(state => state.itemReducer);
    const dispatch = useDispatch();

    const addItemEntry = () => {
        dispatch(addEntry());
    }

    //TODO: change iteration for object
    const entry = () => {
        Object.keys(items).map((itemKey) => {
            return (
                <div className='item-data'>
                    <input type='text' name='item-name' value={items[itemKey].name} />
                    <input type='number' name='item-price' value={items[itemKey].price} min="0" />
                    <input type='number' name='item-quantity' value={items[itemKey].quantity} min='0' />
                </div>   
            );
        });
    }

    return(
        <div className='item-entry'>
            {entry}
            <button onClick={addItemEntry}>Add more items</button>
        </div>
    );
};

export default Item;
