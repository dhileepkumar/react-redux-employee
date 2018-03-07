import {REQUEST_LOGIN, RECEIVE_LOGIN, AUTHENTICATION_PASS, AUTHENTICATION_FAILED, REQUEST_REGISTRATION, RECEIVE_REGISTRATION} from './Constants';

const ActionCreators = {
	fetchUserLogin =  (username, userpassword) = {
		return  (dispatch) => {
			dispatch({type:REQUEST_LOGIN});
		}
	},
	
	fetchUserRegistration =  (email, username, userpassword) = {
		return  (dispatch) => {
			dispatch({type:REQUEST_REGISTRATION});
		}
	}
	
	
}