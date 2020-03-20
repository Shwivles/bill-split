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
