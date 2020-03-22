//index page for reducers
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
    itemReducer,
    profileReducer
});

export default rootReducer