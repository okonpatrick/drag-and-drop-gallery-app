// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxgEw2EhHCphuNo_lGB4wxIO03DEhvNcU",
  authDomain: "image-gallery-app-f2705.firebaseapp.com",
  projectId: "image-gallery-app-f2705",
  storageBucket: "image-gallery-app-f2705.appspot.com",
  messagingSenderId: "653437831888",
  appId: "1:653437831888:web:c233ded06c0f68d10c2cd5",
  measurementId: "G-VJLLF3F807"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);