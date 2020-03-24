import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/*
display all items in selected profile list
when a person is selected display all items in their list
adding a item will add it to the display
*/
function List() {
    const profileState = useSelector(state => state.profileReducer);

    /*
    useEffect(() => {
        let selected = profileState.selected;
        console.log('selected updated: ' + selected);
    });
    */

    //check if selected is equal to the profile key (every render?)
    //display profile list
    //PROBLEM: array does not exist at first render UNSAFE
    const profileList = profileState.profile[profileState.selected].list.map((item) => {
        return (
            <li>
                Item name: {item.name}, price: {item.price}, quantity: {item.quantity}
            </li>
        );
    });

    return (
        <div>
            {profileState.selected === '' ?
                <p>nothing in list or none added</p> :
                <ul>
                    {profileList}
                </ul>
            }
        </div>
    );
}

export default List;