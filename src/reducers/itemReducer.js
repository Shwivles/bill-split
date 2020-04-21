//reducer for items state
const data = {
    '000': {
        name: '',
        price: 0,
        quantity: 0
        //added: []
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
            //FIX: id could be ordered in order making add_entry random
            return {
                ...state,
                [add_id]: {
                    name: '',
                    price: 0,
                    quantity: 0
                }
            };

        case 'HANDLE_ENTRY': 
            //action.payload.data = [string e.target.name, int e.target.value]
            const targetName = action.payload.data[0];
            const targetData = action.payload.data[1];
            const id = action.payload.id;
            const updatedData = {...state};
            //keyNames = [name, price, quanityty]
            const keyNames = Object.keys(updatedData[id]);

            if (targetName === keyNames[0]) {
                updatedData[id].name = targetData;
            } else if (targetName === keyNames[1]) {
                updatedData[id].price = targetData;
            } else if (targetName === keyNames[2]) {
                updatedData[id].quantity = targetData;
            }

            return updatedData;

            case 'UPDATE_ENTRY':
                const updatedState = {...state};
                const itemToUpdate = action.payload.id;
                updatedState[itemToUpdate].added.push(action.payload.userName);


                console.log(updatedState[itemToUpdate].added)
                return updatedState;
            case 'DELETE_ENTRY':
                const toDelete = action.payload.id;
                const deleteState = {...state};
                delete deleteState[toDelete];
                return deleteState;

        default:
            return state;
    };
}

export default itemReducer;