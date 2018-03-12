import {REQUEST_LOGIN, REQUEST_REGISTRATION} from '../Actions/Constants';

const initialState =  {
	email:'',
	password:'',
}

const LoginAndRegister = (state = initialState,action) => {
	switch(action.type){
		
		case REQUEST_LOGIN:
		return action.payload;
		
		case REQUEST_REGISTRATION:
		return action.payload;

		default:
		return state;
	}
}

export default LoginAndRegister;