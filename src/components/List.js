import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

/*
display all items in selected profile list
*/
function List() {
    const profile = useSelector(state => state.profileReducer);

    const profileList = profile.profile

    return (
        <div>

        </div>
    );
}

export default List;