//profile reducer for state of profile

/* state example
{
    input: '',
    selected: '',
    profile: {
        'jerry': [
            {...},
            {...}
        ],
        'kyla': [
            {...}
        ]
    }
}
*/
const initialState = {
    input: '',
    selected: '',
    profile: []
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default profileReducer;
