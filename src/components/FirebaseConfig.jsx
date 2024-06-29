import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  setPersistence, browserLocalPersistence

} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEo7qo-x4Z6GFN9ljtR_QlH5F_Ay9QQkw",
  authDomain: "bolime-app.firebaseapp.com",
  projectId: "bolime-app",
  storageBucket: "bolime-app.appspot.com",
  messagingSenderId: "661514278322",
  appId: "1:661514278322:web:95f2f663ce8c432abf00ab",
  measurementId: "G-T2N967M3FL",
};

export const firebase = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase);
export const auth = getAuth(firebase);


export const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const register = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
