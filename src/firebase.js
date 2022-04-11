// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
import {initializeApp} from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyDsE5Qg9pfSdipDlprFIqUXd8v6JkWAMJ8",
    authDomain: "clone-240af.firebaseapp.com",
    projectId: "clone-240af",
    storageBucket: "clone-240af.appspot.com",
    messagingSenderId: "306772106328",
    appId: "1:306772106328:web:090f56ad33979d0625fe2d",
    measurementId: "G-98XS9TNNYP"
  };

  const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export {db, auth};