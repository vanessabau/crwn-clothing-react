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

// Take authentication and store in database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  // Check if data exists, if not create a new user using the data from our userAuth object
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  // return userRef in case we want to use it in our code for something
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
