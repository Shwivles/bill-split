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
