// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectDatabaseEmulator } from "firebase/database";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtVw4N9qaN7fGOlvUXribNSd3Uxs-tF7Q",
  authDomain: "chatbot-ba694.firebaseapp.com",
  projectId: "chatbot-ba694",
  storageBucket: "chatbot-ba694.appspot.com",
  messagingSenderId: "1054304384986",
  appId: "1:1054304384986:web:eab6c30ab3dd6e704072e3",
  measurementId: "G-9TC8SS4L8S",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

connectAuthEmulator(auth, "http://127.0.0.1:9099");
if (window.location.hostname === "localhost") {
  connectFirestoreEmulator(db, "localhost", 8080);
}
