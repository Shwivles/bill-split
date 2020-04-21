//profile reducer for state of profile

/* state example
{
    input: '',
    selected: '',
    profile: {
        'jerry': {
            list: [
                {...},
                {...}
            ],
            total: 0
        },
        'kyla': {
            list: [
                {...},
                {...}
            ],
            total: 0
        }
    }
}
*/
const initialState = {
    input: '',
    selected: '',
    profile: {
        '': {
            list: [],
            total: 0
        }
    }
};


const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_INPUT':
            const data = action.payload.input;
            return {
                ...state,
                input: data
            };

        case 'ADD_PROFILE':
            const newProfile = state.input;
            console.log(newProfile);
            return {
                ...state,
                input: '',
                profile: {
                    ...state.profile,
                    [newProfile]: {
                        list: [],
                        total: 0
                    }
                }
            };

        case 'ADD_PROFILE_ITEM':
            //search through state to find matching selected name/profile
            //add in payload to the profiles items list
            const selected = state.selected;
            const itemData = action.payload.item;
            console.log(itemData);
            const newState = {...state};
            newState.profile[selected].list.push({
                name: itemData.name,
                price: itemData.price,
                quantity: 1
            });
            console.log(newState.profile);

            //TODO:
            /*
            if item exists
                find the selected and update quantity
            if not exist
                create new item into profile
            */


            //creating total
            //TODO: add in quantity to divide between users
            let sum = parseFloat(state.profile[selected].total);
            sum += parseFloat(itemData.price);
            newState.profile[selected].total = sum;

            return newState;

        case 'CHANGE_SELECTED':
            const test = action.payload.selected;
            console.log(test);
            return {
                ...state,
                selected: action.payload.selected
            };

        case 'DELETE_PROFILE_ENTRY':
            const idx = action.payload.listIdx;
            const deletedState = {...state};
            deletedState.profile[state.selected].list.splice(idx, 1);

            let delSum = 0;
            const listLength = deletedState.profile[state.selected].list.length;
            for (let i = 0; i < listLength; i++) {
                delSum += parseFloat(deletedState.profile[state.selected].list[i].price);
            }
            deletedState.profile[state.selected].total = delSum;

            return deletedState;

        case 'DELETE_PROFILE':
            const profileName = action.payload.profileName;
            const profileDeleteState = {...state};
            delete profileDeleteState.profile[profileName];

            return profileDeleteState;

        default:
            return state;
    }
}

export default profileReducer;
