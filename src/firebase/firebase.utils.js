import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: "AIzaSyC2cToPyyndDAgTSAqfaa37bJL-WT-F3ac",
	authDomain: "food-4beda.firebaseapp.com",
	databaseURL: "https://food-4beda-default-rtdb.firebaseio.com",
	projectId: "food-4beda",
	storageBucket: "food-4beda.appspot.com",
	messagingSenderId: "681266883397",
	appId: "1:681266883397:web:9072666060a29d21c46c2c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promps:'select_account'});
export const signInWhithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;

