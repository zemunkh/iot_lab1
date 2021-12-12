import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "API_KEY",
    authDomain: "DOMAIN.firebaseapp.com",
    databaseURL: "https://URL.firebaseio.com",
    projectId: "PROJECT_ID",
    storageBucket: "BUCKET_URL.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
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

