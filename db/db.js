import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCLpLOiDgRwcSkgklt0DlIuhXHj2uUOeZc",
  authDomain: "hackaton-34125.firebaseapp.com",
  databaseURL:
    "https://hackaton-34125-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hackaton-34125",
  storageBucket: "hackaton-34125.appspot.com",
  messagingSenderId: "1096056460239",
  appId: "1:1096056460239:web:3eecd1fb2eece4cc3638ba",
  measurementId: "G-R2XRVHZSXN",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
