// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAwi61Rcye5wgsBqvZU8LR2jv9FEvXJsb4",
  authDomain: "joya-7cae6.firebaseapp.com",
  projectId: "joya-7cae6",
  storageBucket: "joya-7cae6.appspot.com",
  messagingSenderId: "143741114053",
  appId: "1:143741114053:web:2b872f2798211304c402ac",
  measurementId: "G-349HPWMESN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const colRef = collection(db, 'tours');
getDocs(colRef)
    .then((snapshot) => {
        console.log(snapshot.docs)
    })
