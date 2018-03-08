import {REQUEST_LOGIN, REQUEST_REGISTRATION, RECEIVE_REGISTRATION, RECEIVE_LOGIN} from '../Actions/Constants';

const initialState =  {
	email:'',
	password:'',
}

const register = (state = initialState,action) => {
	console.log('Auth Reducer Dispatch : ', action, state)
	switch(action.type){
		
		case REQUEST_LOGIN:
		return action;
		
		case RECEIVE_LOGIN:
		return action.userdata;
		
		case REQUEST_REGISTRATION:
		return action;
		
		case RECEIVE_REGISTRATION:
		return action.userdata;

		default:
		return state;
	}
}

export default register;