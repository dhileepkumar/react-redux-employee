import {REQUEST_LOGIN, RECEIVE_LOGIN, AUTHENTICATION_PASS, AUTHENTICATION_FAILED, REQUEST_REGISTRATION, RECEIVE_REGISTRATION} from './Constants';
import { FirebaseAuth } from '../Firebase'

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
			dispatch({ type: REQUEST_REGISTRATION, payload:  values});
			FirebaseAuth.doCreateUserWithEmailAndPassword(values.email, values.password).then(
				(result) => dispatch({
					type:RECEIVE_REGISTRATION, 
					payload:{
						email:result.email, 
						uid:result.uid, 
						password:'',
						message:'successfully created your account',
						signupalready:true,
						signinalready:false,
					},
					success:true
				}),
				(error) => console.log(error)
			)
			.catch((error)=>{
					console.log(error);
			})
		}
	},
	
}

export default ActionCreators;