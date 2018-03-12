import {AUTHENTICATION_PASS, AUTHENTICATION_FAILED, AUTHENTICATION_ERROR} from '../Actions/Constants';

const initialState = {
	auth:false,
	token:'',
	message:'',
}

const AuthReducer = (state = initialState,action) => {
	switch(action.type){
		
		case AUTHENTICATION_PASS:
		return action.payload;
		
		case AUTHENTICATION_FAILED:
		return action.payload;

		case AUTHENTICATION_ERROR:
		return action.payload;

		default:
		return state;
	}
}

export default AuthReducer;