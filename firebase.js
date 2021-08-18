import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBt0bTzWLHZkqpJVxmk6LZwvBHJB8tiO8E",
  authDomain: "rn-taxi-app.firebaseapp.com",
  projectId: "rn-taxi-app",
  storageBucket: "rn-taxi-app.appspot.com",
  messagingSenderId: "701543310292",
  appId: "1:701543310292:web:3eec2aad37d4b32a6c2c41",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
