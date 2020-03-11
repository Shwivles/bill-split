//index for redux actions

//Item entry actions
export const addEntry = () => {
    return {
        type: 'ADD_ENTRY'
    };
};

export const handleEntry = (data) => {
    return {
        type: 'HANDLE_ENTRY',
        payload: { data }
    };

};
