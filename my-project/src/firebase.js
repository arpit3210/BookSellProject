// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcZpFVzvet2IXbnaueUSIhDy4jLLw3ChA",
  authDomain: "bookstoreproject-27caa.firebaseapp.com",
  databaseURL: "https://bookstoreproject-27caa-default-rtdb.firebaseio.com",
  projectId: "bookstoreproject-27caa",
  storageBucket: "bookstoreproject-27caa.appspot.com",
  messagingSenderId: "392569344755",
  appId: "1:392569344755:web:bad90af81c4095f9e61d86",
  measurementId: "G-P7BSYPM8TF"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export const database = getDatabase(firebase);

export default firebase;