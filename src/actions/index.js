//index for redux actions
export const addEntry = (data) => {
    return {
        type: 'ADD_ENTRY',
        payload: {
            data
        }
    };
};
