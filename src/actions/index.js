//index for redux actions

//Item entry actions
export const addEntry = (id) => {
    return {
        type: 'ADD_ENTRY'
    };
}

export const handleEntry = (data, id) => {
    return {
        type: 'HANDLE_ENTRY',
        payload: {
            data,
            id
        }
    };
}

export const updateEntry = (userName, id) => {
    return {
        type: 'UPDATE_ENTRY',
        payload: {
            userName,
            id
        }
    };
}

export const deleteEntry = (id) => {
    return {
        type: 'DELETE_ENTRY',
        payload: {
            id
        }
    };
}


//Profile actions

//update the input of the profile entry
export const updateInput = (input) => {
    return {
        type:'UPDATE_INPUT',
        payload: {
            input
        }
    };
}

//bring input into the list and reset input
export const addProfile = () => {
    return {
        type: 'ADD_PROFILE'
    };
}

//change selected
export const changeSelected = (selected) => {
    return {
        type: 'CHANGE_SELECTED',
        payload: {
            selected
        }
    }
};

//copy over an item from the item state into the profile
export const addItemToProfile = (item) => {
    return {
        type: 'ADD_PROFILE_ITEM',
        payload: {
            item
        }
    };
}
