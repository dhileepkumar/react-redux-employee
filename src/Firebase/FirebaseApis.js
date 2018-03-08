import { auth } from './Config';

const FirebaseApisCluster = {
	CreateUser(email, password){
		const doCreateUserWithEmailAndPassword = (email, password) =>
		auth.createUserWithEmailAndPassword(email, password);
		return doCreateUserWithEmailAndPassword;
	},
	LoginUser(email, password){
		console.log('Firebase:', email)
		const doSignInWithEmailAndPassword = (email, password) =>
		auth.signInWithEmailAndPassword(email, password);
		return doSignInWithEmailAndPassword;
	},
	doSignOut(){
		 const doSignOut = () => auth.signOut();
		 return doSignOut;
	}
}

export default FirebaseApisCluster;
