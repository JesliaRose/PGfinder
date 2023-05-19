// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl2n4lo4sqUVPP7CvI57FBSLmYzcoJOaM",
  authDomain: "pgfinder-54297.firebaseapp.com",
  projectId: "pgfinder-54297",
  storageBucket: "pgfinder-54297.appspot.com",
  messagingSenderId: "87937624432",
  appId: "1:87937624432:web:5debc8cc0172ae78ac47b5",
  measurementId: "G-SYEGL5MPCY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);