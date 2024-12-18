import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCzJ5WysGmet7hc0zmNMLezktjagISI7h4",
  authDomain: "atlanta-tree-cutting.firebaseapp.com",
  projectId: "atlanta-tree-cutting",
  storageBucket: "atlanta-tree-cutting.firebasestorage.app",
  messagingSenderId: "941520171648",
  appId: "1:941520171648:web:ce88641689c6ff87eaac65"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export both auth and db

