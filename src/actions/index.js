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

/*
export const submitEntry = (id) => {
    return {
        type: 'SUMBIT_ENTRY',
        payload: {
            id
        }
    };
}
*/

export const deleteEntry = (id) => {
    return {
        type: 'DELETE_ENTRY',
        payload: {
            id
        }
    };
}


//Profile actions