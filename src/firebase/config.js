import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEJimhAyi7mD5wIUWu0NbosoBukY7NyEs",
  authDomain: "thedojosite-e39cd.firebaseapp.com",
  projectId: "thedojosite-e39cd",
  storageBucket: "thedojosite-e39cd.appspot.com",
  messagingSenderId: "726558318440",
  appId: "1:726558318440:web:b2fc49c33a70b6454380dd",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp}