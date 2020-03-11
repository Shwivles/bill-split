//reducer for items state
const data = [{
    name: '',
    price: 0,
    quantity: 0
}];

const itemReducer = (state = data, action) => {
    switch(action.type) {
        case 'ADD_ENTRY': 
            return [
                ...state,
                {
                    name: '',
                    price: 0,
                    quantity: 0
                }
            ];
        case 'HANDLE_ENTRY': 
            const entry = action.payload;


        default:
            return state;
    }
}

export default itemReducer;