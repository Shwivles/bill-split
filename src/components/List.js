import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProfileEntry } from '../actions';

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
    //TODO: 
    const profileList = profileState.profile[profileState.selected].list.map((item, idx) => {
        return (
            <li key={idx}>
                <div>
                    Item name: {item.name}, price: {item.price}, quantity: {item.quantity}
                </div>
                <button onClick={() => dispatch(deleteProfileEntry(idx))}>Delete</button>
            </li>
        );
    });

    const total = profileState.profile[profileState.selected].total;

    return (
        <div>
            {profileState.selected === '' ?
                <p>nothing in list or none added</p> :
                <ul>
                    {profileList}
                    <li>{total}</li>
                </ul>
            }
        </div>
    );
}

export default List;