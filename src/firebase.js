import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6vNJgCfqCcnRw9TFZ6h4SJfxmAwKhcDA",
  authDomain: "virt-table.firebaseapp.com",
  projectId: "virt-table",
  storageBucket: "virt-table.appspot.com",
  messagingSenderId: "427810831569",
  appId: "1:427810831569:web:aa00bd4532f8cfb0c319f0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(user);
  } else {
    console.log("out");
  }
});

function _signIn(email, pass) {
  signInWithEmailAndPassword(auth, email, pass)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function _signOut() {
  signOut(auth).catch((error) => {
    // An error happened.
  });
}

window["signIn"] = _signIn;
window["signOut"] = _signOut;