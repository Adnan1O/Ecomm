// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnezpMeG98Gc0tl8nf1X3oVuopjC3pTRw",
  authDomain: "ecommerce-61545.firebaseapp.com",
  projectId: "ecommerce-61545",
  storageBucket: "ecommerce-61545.appspot.com",
  messagingSenderId: "582146873561",
  appId: "1:582146873561:web:27807f4b4cfc3cbcd646c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const db = getFirestore(app);
export const  auth = getAuth(app);