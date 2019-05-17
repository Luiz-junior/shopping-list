import { combineReducers } from 'redux';

import listReducer from './listReducer';
import { form } from './formReducer';

export default combineReducers({
    list: listReducer,
    form: form,
});