import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKLIcxs8jNZ2Ohb4xkRMjxHJBPBOVkK6E",
  authDomain: "tailwimd-form.firebaseapp.com",
  databaseURL: "https://tailwimd-form-default-rtdb.firebaseio.com",
  projectId: "tailwimd-form",
  storageBucket: "tailwimd-form.appspot.com",
  messagingSenderId: "108215065745",
  appId: "1:108215065745:web:ecdc9237ac3aae71e33330",
  measurementId: "G-4WQDBEB2S1",
};
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
var database = firebase.database();

export { storage, database };
