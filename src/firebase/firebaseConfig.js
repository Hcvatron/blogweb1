import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc,getDoc,onSnapshot } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyC-HkUex9ytD5TnANQmL0MqyqpmCFpJKUQ",
  authDomain: "blogweb1-ebe3b.firebaseapp.com",
  projectId: "blogweb1-ebe3b",
  storageBucket: "blogweb1-ebe3b.firebasestorage.app",
  messagingSenderId: "67818564492",
  appId: "1:67818564492:web:257c23aa421722797f44a9",
  measurementId: "G-N63ELWKW7W"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app); 

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, setDoc,getDoc, doc,storage,onSnapshot };
