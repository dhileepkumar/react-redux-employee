import * as firebase from 'firebase';

let database
let config = {
 apiKey: "AIzaSyCuwlD123cmZ7vH6g9xRzUnJEDu6UUIWi8",
 authDomain: "employee-36bd1.firebaseapp.com",
 databaseURL: "https://employee-36bd1.firebaseio.com",
 projectId: "employee-36bd1",
 storageBucket: "employee-36bd1.appspot.com",
 messagingSenderId: "623841538221"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {auth};
