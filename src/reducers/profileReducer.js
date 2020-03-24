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
            newState.profile[selected].list.push(itemData);
            console.log(newState.profile);
            return newState;

        case 'CHANGE_SELECTED':
            const test = action.payload.selected;
            console.log(test);
            return {
                ...state,
                selected: action.payload.selected
            }

        default:
            return state;
    }
}

export default profileReducer;
