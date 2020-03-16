//reducer for items state
const data = {
    '000': {
        name: '',
        price: 0,
        quantity: 0
    }
};

const createId = () => {
    const min = 1;
    const max = 399;
    const key = Math.floor(Math.random() * (max - min)) + min;
    return key;
}

const itemReducer = (state = data, action) => {
    switch(action.type) {
        case 'ADD_ENTRY': 
            const add_id = createId();
            return {
                ...state,
                [add_id]: {
                    name: '',
                    price: 0,
                    quantity: 0
                }
            };
        case 'HANDLE_ENTRY': 
            /*
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
            */
            //TODO: fix handle entry for search into data

        default:
            return state;
    };
}

export default itemReducer;