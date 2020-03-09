//reducer for items state
const data = [{
    name: '',
    price: 0,
    quantity: 0
}];

const itemReducer = (state = data, action) => {
    switch(action.type) {
        case 'ADD_ENTRY': 
            const entry = action.payload;
            return [
                ...state,
                {
                    name: entry.name,
                    price: entry.price,
                    quantity: entry.quantity
                }
            ];

        default:
            return state;
    }
}

export default itemReducer;