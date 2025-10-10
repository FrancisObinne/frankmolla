import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-AziUCXwu7dHxgFhH_FtP71pqor6TYnQ",
  authDomain: "frankmolla2.firebaseapp.com",
  projectId: "frankmolla2",
  storageBucket: "frankmolla2.firebasestorage.app",
  messagingSenderId: "14474509727",
  appId: "1:14474509727:web:99686f90658273aa6c51aa",
  measurementId: "G-R3PW7G8V46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services you need
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
