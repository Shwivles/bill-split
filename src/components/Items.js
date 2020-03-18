import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEntry, handleEntry, submitEntry, deleteEntry } from '../actions';

function Item() { 
    const items = useSelector(state => state.itemReducer);
    const dispatch = useDispatch();

    const addItemEntry = () => {
        dispatch(addEntry());
    }

    const handleChange = (e, idx) => {
        const data = [e.target.name, e.target.value];
        dispatch(handleEntry(data, idx));
    }

    const entry = Object.keys(items).map((itemKey) => {
        return (
            <div className='item-data'>
                <input type='text' onChange={(e) => handleChange(e, itemKey)} name='name' value={items[itemKey].name} />
                <input type='number' onChange={(e) => handleChange(e, itemKey)} name='price' value={items[itemKey].price} min="0" />
                <input type='number' onChange={(e) => handleChange(e, itemKey)} name='quantity' value={items[itemKey].quantity} min='0' />

                <button onClick={() => dispatch(submitEntry(itemKey))}>Submit</button> {/*may be changed for adding to profile */}
                <button onClick={() => dispatch(deleteEntry(itemKey))}>Delete</button>
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
