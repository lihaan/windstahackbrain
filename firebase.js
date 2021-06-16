import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAiaIMJZjAd3T5bvtu-ZH3GL8xG4g10Kqk",
  authDomain: "fireplace-e5a31.firebaseapp.com",
  projectId: "fireplace-e5a31",
  storageBucket: "fireplace-e5a31.appspot.com",
  messagingSenderId: "367744988455",
  appId: "1:367744988455:web:a4b6e94572159a08ae6502"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
