import { initializeApp} from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCh5qYs0vyTGTg4eekptymZb-aA4uRojB4",
  authDomain: "millenyifal523.firebaseapp.com",
  projectId: "millenyifal523",
  storageBucket: "millenyifal523.appspot.com",
  messagingSenderId: "659230537202",
  appId: "1:659230537202:web:5df9ea170708e234c0676b",
  measurementId: "G-FKCGRRP3DR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app)

export { app, db, auth }