// Import the functions you need from the SDKs you need
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADevTVp_5cF1UU7_yFdwLGAsWVO6JUvLM",
  authDomain: "disneyplus-clone-a84b0.firebaseapp.com",
  projectId: "disneyplus-clone-a84b0",
  storageBucket: "disneyplus-clone-a84b0.appspot.com",
  messagingSenderId: "1067616705528",
  appId: "1:1067616705528:web:00f93500f44f3e9833140d",
  measurementId: "G-SZ313YSSXR",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
