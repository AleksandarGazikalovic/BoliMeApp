import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDEo7qo-x4Z6GFN9ljtR_QlH5F_Ay9QQkw",
  authDomain: "bolime-app.firebaseapp.com",
  databaseURL:
    "https://bolime-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bolime-app",
  storageBucket: "bolime-app.appspot.com",
  messagingSenderId: "661514278322",
  appId: "1:661514278322:web:95f2f663ce8c432abf00ab",
  measurementId: "G-T2N967M3FL",
};

export const firebase = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase);
export const auth = getAuth(firebase);
