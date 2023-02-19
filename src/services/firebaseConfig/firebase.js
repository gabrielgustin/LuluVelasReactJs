import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBOLVEzuNAEt_feFrSkMWk6bPaOoMoLaE4",
  authDomain: "luluvelas-cbcc4.firebaseapp.com",
  projectId: "luluvelas-cbcc4",
  storageBucket: "luluvelas-cbcc4.appspot.com",
  messagingSenderId: "748859464956",
  appId: "1:748859464956:web:f5fb4aedea74b024ac4b79"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
