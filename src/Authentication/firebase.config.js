// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpboAScrLRlizicYGQjPpaRtc1vfl-V2U",
  authDomain: "skill-bridge-6471c.firebaseapp.com",
  projectId: "skill-bridge-6471c",
  storageBucket: "skill-bridge-6471c.appspot.com",
  messagingSenderId: "685020563022",
  appId: "1:685020563022:web:5376ba391c90adab87a51f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
