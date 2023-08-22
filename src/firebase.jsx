import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCecqm4yD7P5BOrjG3Tj6bxRL3If46kFeM",
  authDomain: "lama-3931c.firebaseapp.com",
  projectId: "lama-3931c",
  storageBucket: "lama-3931c.appspot.com",
  messagingSenderId: "146473074687",
  appId: "1:146473074687:web:66050e0ef7dfcc1e5df1ca",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
