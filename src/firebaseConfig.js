import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

firebase.initializeApp(config);

// firebase utilities
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
const fieldValue = firebase.firestore.FieldValue; 
const sensorsCollection = db.collection('sensors');


export {
    db,
    auth,
    currentUser,
    timestamp,
    sensorsCollection,
    fieldValue
}

