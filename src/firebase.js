import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBF5Lli53i-NTEFslxyHD8CDZ1yPnrB6B4",
  authDomain: "ins2-896a2.firebaseapp.com",
  databaseURL: "https://ins2-896a2.firebaseio.com",
  projectId: "ins2-896a2",
  storageBucket: "ins2-896a2.appspot.com",
  messagingSenderId: "412680650971",
  appId: "1:412680650971:web:a30748b66eb9acdfdb4cfe",
  measurementId: "G-38FNDBBGWE",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
