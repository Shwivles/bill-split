//reducer for items state
const data = {
    '000': {
        name: '',
        price: 0,
        quantity: 0
    }
};

const itemReducer = (state = data, action) => {
    switch(action.type) {
        case 'ADD_ENTRY': 
            const add_id = action.payload.id;
            return {
                ...state,
                [add_id]: {
                    name: '',
                    price: 0,
                    quantity: 0
                }
            };
        case 'HANDLE_ENTRY': 
            const entry = action.payload.data;
            const id = action.payload.id;
            const newEntry = {
                name: entry.name,
                price: entry.price,
                quantity: entry.quantity
            };
            return {
                ...state,
                [id]: newEntry
            };

        default:
            return state;
    };
};

export default itemReducer;