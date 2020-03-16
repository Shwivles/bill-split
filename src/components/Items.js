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

    const handleChange = (e, idx) => {
        const data = [e.target.name, e.target.value];
        dispatch(handleEntry(data, idx));
    }

    const entry = () => {
        Object.keys(items).map((itemKey) => {
            return (
                <div className='item-data'>
                    <input type='text' onChange={(e) => handleChange(e, itemKey)} name='item-name' value={items[itemKey].name} key={itemKey} />
                    <input type='number' onChange={(e) => handleChange(e, itemKey)} name='item-price' value={items[itemKey].price} min="0" key={itemKey}/>
                    <input type='number' onChange={(e) => handleChange(e, itemKey)} name='item-quantity' value={items[itemKey].quantity} min='0' key={itemKey}/>
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
