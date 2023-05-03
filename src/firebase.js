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

const avatarURL = "https://firebasestorage.googleapis.com/v0/b/virt-table.appspot.com/o/a%2F{file}?alt=media";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

function loadAvatar(photoURL) {
  photoURL ??= avatarURL.replace("{file}", "_null.jpg");
  window["eCSS"](".avatar", "background-image", `url("${photoURL}")`);
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    window["firebaseUID"] = uid;

    loadAvatar(user.photoURL);
  } else {
    window["firebaseUID"] = null;
    loadAvatar(null);
  }
});

function _signIn(email, pass) {
  signInWithEmailAndPassword(auth, email, pass).catch((error) => {
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