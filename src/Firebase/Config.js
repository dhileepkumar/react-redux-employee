
const FirebaseConfig = {
	firebaseConfig(){
		return {
		   apiKey: "AIzaSyCuwlD123cmZ7vH6g9xRzUnJEDu6UUIWi8",
		   authDomain: "employee-36bd1.firebaseapp.com",
		   databaseURL: "https://employee-36bd1.firebaseio.com",
		   projectId: "employee-36bd1",
		   storageBucket: "employee-36bd1.appspot.com",
		   messagingSenderId: "623841538221"
		}
	},

	config(){
		return{
		  userProfile: 'users', // firebase root where user profiles are stored
		  enableLogging: true, // enable/disable Firebase's database logging
		}
	}
}

export default FirebaseConfig;
