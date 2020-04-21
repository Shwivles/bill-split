import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEntry, handleEntry, addItemToProfile, deleteEntry, updateEntry} from '../actions';

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
                <input type='text' onChange={(e) => handleChange(e, itemKey)} name='name' value={items[itemKey].name} />
                <input type='number' onChange={(e) => handleChange(e, itemKey)} name='price' value={items[itemKey].price} min="0" />
                <input type='number' onChange={(e) => handleChange(e, itemKey)} name='quantity' value={items[itemKey].quantity} min='0' />
                <button onClick={() => handleProfileAdd(itemKey)}>Select</button>
                <button onClick={() => dispatch(deleteEntry(itemKey))}>Delete</button>
            </div>   
        );
    });

    return(
        <div className='item-entry'>
            {entry}
            <button onClick={() => dispatch(addEntry())}>Add more items</button>
        </div>
    );
};

export default Item;
