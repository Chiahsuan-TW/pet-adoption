import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1Rrz88NgG0H9TskWTuwcCwD0DQaKUVm4",
  authDomain: "pet-adoption-bd763.firebaseapp.com",
  projectId: "pet-adoption-bd763",
  storageBucket: "pet-adoption-bd763.appspot.com",
  messagingSenderId: "896197518754",
  appId: "1:896197518754:web:626c72a9e71ef093983efb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
// export db
