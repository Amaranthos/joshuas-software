import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyDDB6IuaN45i8NB24CWOdTd-GVS7XUf6j4",
	authDomain: "joshuas-software.firebaseapp.com",
	databaseURL: "https://joshuas-software.firebaseio.com",
	projectId: "joshuas-software",
	storageBucket: "joshuas-software.appspot.com",
	messagingSenderId: "580757283581"
};

export const fire = firebase.initializeApp(config);
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();