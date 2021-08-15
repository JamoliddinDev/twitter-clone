import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtwXNN5lUetwUlOrLoc_gUNv83tcJdVlc",
  authDomain: "twitter-clone-2e400.firebaseapp.com",
  projectId: "twitter-clone-2e400",
  storageBucket: "twitter-clone-2e400.appspot.com",
  messagingSenderId: "917672064550",
  appId: "1:917672064550:web:5c011e4bf98de090d698e7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
