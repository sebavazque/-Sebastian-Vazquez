import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCacIGBpSJMGfU2ZrrpvtnLfrvo3b3ZB0k",
    authDomain: "react-js---coderhouse.firebaseapp.com",
    projectId: "react-js---coderhouse",
    storageBucket: "react-js---coderhouse.appspot.com",
    messagingSenderId: "744270790589",
    appId: "1:744270790589:web:3c8456c0255640f2c89cd4"
  };
  
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);