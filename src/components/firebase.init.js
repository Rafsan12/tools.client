// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqHjqBh-Vv37Bcys4IDs1vwfW10bep7uU",
  authDomain: "tools-48948.firebaseapp.com",
  projectId: "tools-48948",
  storageBucket: "tools-48948.appspot.com",
  messagingSenderId: "194354206880",
  appId: "1:194354206880:web:72f26b3aa39b5b299d91c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
