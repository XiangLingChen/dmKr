import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCpSO4bRNbW_o7ybtuS7CyrFpA5CFlBn9A",
    authDomain: "dmkr-bffbc.firebaseapp.com",
    databaseURL: "https://dmkr-bffbc.firebaseio.com",
    projectId: "dmkr-bffbc",
    storageBucket: "",
    messagingSenderId: "839885647506",
    appId: "1:839885647506:web:f48f252fffd84ffb"
  };

firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
