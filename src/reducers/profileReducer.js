//profile reducer for state of profile

/* state example
{
    input: '',
    selected: '',
    profile: [
        {
            name: 'jerry',
            items: [
                {...},
                {...}
            ]
        },
        {
            name: 'kyla',
            items: [
                {...},
                {...}
            ]
        }
    ]
}
*/
const initialState = {
    input: '',
    selected: '',
    profile: []
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
            return {
                ...state,
                input: '',
                profile: [
                    ...state.profile,
                    {
                        name: newProfile,
                        items: []
                    }
                ]
            };

        case 'ADD_PROFILE_ITEM':
            //search through state to find matching selected name/profile
            //add in payload to the profiles items list
            const selected = state.selected;
            const itemData = action.payload.item;
            const newState = {...state};
            for (let i = 0; i < newState.profile.length; i++) {
                if (selected === newState.profile[i].name) {
                    newState.profile[i].items.push(itemData);
                    break;
                }
            }
            return newState;

        case 'CHANGE_SELECTED':
            return {
                ...state,
                selected: action.payload.selected
            }

        default:
            return state;
    }
}

export default profileReducer;
