// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAjX2_7kRYajB4P6u_0tyWtC4uBOFIqfhw",
  authDomain: "rpgnew-1a127.firebaseapp.com",
  databaseURL: "https://rpgnew-1a127-default-rtdb.firebaseio.com",
  projectId: "rpgnew-1a127",
  storageBucket: "rpgnew-1a127.firebasestorage.app",
  messagingSenderId: "627781466619",
  appId: "1:627781466619:web:7a942ed41ce0108c14735e",
  measurementId: "G-JBVJPN6KK7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { auth, database };
