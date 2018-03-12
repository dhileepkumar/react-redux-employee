import { combineReducers } from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import LoginandRegisterReducer from './LoginandRegisterReducer';
import AuthReducer from './AuthReducer';
const rootReducer = combineReducers({
	loginregister : LoginandRegisterReducer,
	auth : AuthReducer,
	form : reduxFormReducer
})

export default rootReducer;