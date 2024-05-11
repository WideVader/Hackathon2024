const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");

const firebaseConfig = {
  apiKey: "AIzaSyCLpLOiDgRwcSkgklt0DlIuhXHj2uUOeZc",
  authDomain: "hackaton-34125.firebaseapp.com",
  projectId: "hackaton-34125",
  storageBucket: "hackaton-34125.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "measurement-id",
  databaseURL:
    "https://hackaton-34125-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
