import {REQUEST_LOGIN, RECEIVE_LOGIN, AUTHENTICATION_PASS, AUTHENTICATION_FAILED, REQUEST_REGISTRATION, RECEIVE_REGISTRATION} from './Constants';
import FirebaseApis from '../Firebase/FirebaseApis'

const ActionCreators = {
	doUserLogin(values){
		return {
		  type: REQUEST_LOGIN,
		  email: values.email,
		  password: values.password
		}
	},
	doUserRegistration(values){
		return (dispatch) => {
			dispatch({ type: REQUEST_REGISTRATION, values });
			FirebaseApis.CreateUser(values.email, values.password).then(
				
			)
		}
	},
	fetchUserLogin(username, userpassword){
		return  (dispatch) => {
			dispatch({type:REQUEST_LOGIN});
		}
	},
	
	fetchUserRegistration(email, username){
		return  (dispatch) => {
			dispatch({type:REQUEST_REGISTRATION});
			FirebaseApis.CreateUser().then(
				(userdetails)=>dispatch({type:RECEIVE_REGISTRATION, success:true, userdetails}),
				(error)=>dispatch({type:AUTHENTICATION_FAILED, success:false})
			).catch( error=> {
				(error) => dispatch({type:AUTHENTICATION_FAILED, success:false})
			})
		}
	},
}

export default ActionCreators;