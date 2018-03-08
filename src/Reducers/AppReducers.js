import { combineReducers } from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import auth from './AuthReducer';
const rootReducer = combineReducers({
	auth,
	form: reduxFormReducer
})

export default rootReducer;