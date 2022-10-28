// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACIwckxV44vYPs2hh0obNS_XqdnhyH_cs",
  authDomain: "constructionapp-44210.firebaseapp.com",
  databaseURL: "https://constructionapp-44210-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "constructionapp-44210",
  storageBucket: "constructionapp-44210.appspot.com",
  messagingSenderId: "904555987544",
  appId: "1:904555987544:web:4ee364599e6044023a002d",
  measurementId: "G-YFFQST1V01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//initialize database
export const db = getDatabase(app);