import {REQUEST_LOGIN, REQUEST_REGISTRATION, RECEIVE_REGISTRATION, RECEIVE_LOGIN} from '../Actions/Constants';

const initialState =  {
	email:'',
	uid:'',
	password:'',
	message:'',
	signupalready:false,
	signinalready:false
}

const register = (state = initialState,action) => {
	switch(action.type){
		
		case REQUEST_LOGIN:
		return action.payload;
		
		case RECEIVE_LOGIN:
		return action.userdata;
		
		case REQUEST_REGISTRATION:
		return action.payload;
		
		case RECEIVE_REGISTRATION:
		return action.payload;

		default:
		return state;
	}
}

export default register;