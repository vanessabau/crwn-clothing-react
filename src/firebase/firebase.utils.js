import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBJJAN2YKeFt2yWzmxREWtjoircbDr13wk",
  authDomain: "crwn-db-c133b.firebaseapp.com",
  projectId: "crwn-db-c133b",
  storageBucket: "crwn-db-c133b.appspot.com",
  messagingSenderId: "291824272049",
  appId: "1:291824272049:web:711e98ad211a4c91381890",
  measurementId: "G-BZT1TCVG5H",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
