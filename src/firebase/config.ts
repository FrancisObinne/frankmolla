import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpyi5fZsdjMTnGmlwbZznP2jQxuWVwZmY",
  authDomain: "frankmolla-43510.firebaseapp.com",
  projectId: "frankmolla-43510",
  storageBucket: "frankmolla-43510.firebasestorage.app",
  messagingSenderId: "170596045807",
  appId: "1:170596045807:web:cedc764f1a8d3f6a155c1a",
  measurementId: "G-E6TL42EQPK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services you need
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
