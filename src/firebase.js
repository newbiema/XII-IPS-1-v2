// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDpIXsh1R5U-iEXUgT75HxxkENoMY4HcBk",
  authDomain: "webkelas-93470.firebaseapp.com",
  projectId: "webkelas-93470",
  storageBucket: "webkelas-93470.appspot.com",
  messagingSenderId: "801599486899",
  appId: "1:801599486899:web:2244b01c3223df591529c6",
  measurementId: "G-RWE3VY3RNV"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();