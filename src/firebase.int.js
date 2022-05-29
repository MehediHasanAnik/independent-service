// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEwo1iBf9yAyN5IKVGkbrUWWBMiZFxQwE",
  authDomain: "tenth-assignment-eb80c.firebaseapp.com",
  projectId: "tenth-assignment-eb80c",
  storageBucket: "tenth-assignment-eb80c.appspot.com",
  messagingSenderId: "966638612843",
  appId: "1:966638612843:web:73a6bed92f0e300ce8dc2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
