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
            //action.payload.data = [e.target.name, e.target.value]
            const targetName = action.payload.data[0];
            const targetData = action.payload.data[1];
            const id = action.payload.id;
            const updatedData = state;
            //keyNames = [name, price, quanityty]
            const keyNames = Object.keys(updatedData[action.payload.id]);

            if (targetName === keyNames[0]) {
                updatedData[id].name = targetData;
            } else if (targetName === keyNames[1]) {
                updatedData[id].price = targetData;
            } else if (targetName = keyNames[2]) {
                updatedData[id].quantity = targetData;
            }

            return updatedData;

        default:
            return state;
    };
}

export default itemReducer;