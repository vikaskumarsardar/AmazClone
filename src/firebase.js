import React from 'react'
import firebase from 'firebase'


const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBph1JsVjPJQG2GDXiQccacVVbz8LyIG8Y",
    authDomain: "amaz-clone-eeb18.firebaseapp.com",
    projectId: "amaz-clone-eeb18",
    storageBucket: "amaz-clone-eeb18.appspot.com",
    messagingSenderId: "432924931903",
    appId: "1:432924931903:web:fef9bc0b83873cfa69458a",
    measurementId: "G-0XNK88S4PE"
  })
const db=firebaseApp.firestore();
const auth=firebase.auth();
export {db,auth};




