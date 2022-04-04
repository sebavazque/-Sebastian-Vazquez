
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCBH1Fi0nbbX41_SiN47Xm48tziXpM9INY",
  authDomain: "ecommerce-7c952.firebaseapp.com",
  projectId: "ecommerce-7c952",
  storageBucket: "ecommerce-7c952.appspot.com",
  messagingSenderId: "1086332381229",
  appId: "1:1086332381229:web:030d5c45a5901debd270a4"
};


const app = initializeApp(firebaseConfig);

  export const dbFirebase = getFirestore(app);