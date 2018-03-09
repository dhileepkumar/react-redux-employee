import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyCuwlD123cmZ7vH6g9xRzUnJEDu6UUIWi8",
  authDomain: "employee-36bd1.firebaseapp.com",
  databaseURL: "https://employee-36bd1.firebaseio.com",
  projectId: "employee-36bd1",
  storageBucket: "employee-36bd1.appspot.com",
  messagingSenderId: "623841538221"
};

const devConfig = {
  apiKey: "AIzaSyCuwlD123cmZ7vH6g9xRzUnJEDu6UUIWi8",
 authDomain: "employee-36bd1.firebaseapp.com",
 databaseURL: "https://employee-36bd1.firebaseio.com",
 projectId: "employee-36bd1",
 storageBucket: "employee-36bd1.appspot.com",
 messagingSenderId: "623841538221"
};

const config = devConfig;
firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebase.auth();

export {
  auth,
  db
};
