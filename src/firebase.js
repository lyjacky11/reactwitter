import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey            : process.env.REACT_APP_FIREBASE_API,
	authDomain        : "reactwitter-app.firebaseapp.com",
	projectId         : "reactwitter-app",
	storageBucket     : "reactwitter-app.appspot.com",
	messagingSenderId : "897694041782",
	appId             : "1:897694041782:web:1d2978ab702786cfc0c817",
	measurementId     : "G-XD0ZKS4B8F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth, db };
