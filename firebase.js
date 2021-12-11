import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD_NkUTbuB-AQYadWIC5WCKdqDLR4qdw3k",
    authDomain: "clone-5d626.firebaseapp.com",
    projectId: "clone-5d626",
    storageBucket: "clone-5d626.appspot.com",
    messagingSenderId: "952972930431",
    appId: "1:952972930431:web:0831d5ffd7b39720423e4a",
    measurementId: "G-EVWFFG3TQW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};