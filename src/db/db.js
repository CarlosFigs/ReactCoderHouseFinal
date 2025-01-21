import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9TKrqyzrEdzTruLI-Ui3dz16nbBKJGBg",
  authDomain: "coderhouse-react-d5b2a.firebaseapp.com",
  projectId: "coderhouse-react-d5b2a",
  storageBucket: "coderhouse-react-d5b2a.firebasestorage.app",
  messagingSenderId: "772750019294",
  appId: "1:772750019294:web:d8f427b2b67ce4aa3fd04f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;