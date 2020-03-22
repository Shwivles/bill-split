import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput, addProfile, changeSelected } from '../actions';

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
                </div>
            );
        }
    });

    return (
        <div>
            <div className='users'>
                {userList}
            </div>
            <div className='profile-input'>
                <input type='text' onChange={(e) => handleChange(e.target.value) } name='profile-name' value={users.input} />
                <button type='submit' onClick={() => dispatch(addProfile())} >Add user</button>
            </div>
        </div>
    );
}

export default Profiles;