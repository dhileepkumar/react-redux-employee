import {REQUEST_LOGIN, REQUEST_REGISTRATION, AUTHENTICATION_PASS, AUTHENTICATION_FAILED, AUTHENTICATION_ERROR} from './Constants';
import { FirebaseAuth } from '../Firebase'

const ActionCreators = {
	doUserLogin(values){
		return (dispatch) =>{
						console.log(values);
			dispatch({type:REQUEST_LOGIN, payload:values})
			FirebaseAuth.doSignInWithEmailAndPassword(values.email, values.password).then(
				(result) => dispatch({ type:AUTHENTICATION_PASS,  payload:{ auth:true, token:result.uid, message:'Successfully Logged In'},success:true}),
				(error) => dispatch({type:AUTHENTICATION_FAILED, payload:{ auth:false, token:'', message:error.message},success:false})
			)
			.catch(error=>{
					dispatch({type:AUTHENTICATION_ERROR, payload:{auth:false, token:'',message:error}, success:false})
			})
		}
	},
	doUserRegistration(values){
		return (dispatch) => {
			dispatch({ type: REQUEST_REGISTRATION, payload:  values});
			FirebaseAuth.doCreateUserWithEmailAndPassword(values.email, values.password).then(
				(result) => dispatch({ type:AUTHENTICATION_PASS,  payload:{ auth:true, token:result.uid, message:'Successfully Logged In'},success:true}),
				(error) => dispatch({type:AUTHENTICATION_FAILED, payload:{ auth:false, token:'', message:error.message},success:false})
			)
			.catch((error)=>{
					dispatch({type:AUTHENTICATION_ERROR, payload:{ auth:false, token:'', message:error},success:false})
			})
		}
	},
	
}

export default ActionCreators;