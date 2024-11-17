// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwOaD9zE21Lsd_vaLF9QK3I3qhO_eLElQ",
  authDomain: "fir-new-projects-bf5e9.firebaseapp.com",
  projectId: "fir-new-projects-bf5e9",
  storageBucket: "fir-new-projects-bf5e9.firebasestorage.app",
  messagingSenderId: "322161519911",
  appId: "1:322161519911:web:3000723626bc5450540d02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
