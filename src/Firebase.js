
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBPw97i27Og4ajHIm0R0OjsjvHzAn5SCUw",
  authDomain: "app-demo-7c659.firebaseapp.com",
  projectId: "app-demo-7c659",
  storageBucket: "app-demo-7c659.firebasestorage.app",
  messagingSenderId: "675249591066",
  appId: "1:675249591066:web:7e14728f82df004ec452a3",
  measurementId: "G-6ZRN0PD5XX"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;