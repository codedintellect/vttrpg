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

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

const avatarURL = "https://firebasestorage.googleapis.com/v0/b/virt-table.appspot.com/o/a%2F{file}?alt=media";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

function loadAvatar(photoURL) {
  photoURL ??= avatarURL.replace("{file}", "_null.jpg");
  window["eCSS"](".avatar", "background-image", `url("${photoURL}")`);
}

function loadName(name) {
  name ??= "Unknown";
  window["eCSS"](".name::after", "content", `"${name}"`);
}

function loadTag(tag) {
  tag ??= "";
  window["eCSS"](".tag::after", "content", `"${tag}"`);
}

function generateName() {
  let noun = ["owlbear", "mindflayer", "tarrasque", "kobold", "dragon", "elemental"];
  noun = noun[Math.floor((Math.random()*noun.length))];
  let num = Math.floor(10000 + Math.random() * 10000).toString().substring(1);
  let n = noun + num;
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
    const uid = user.uid;
    window["firebaseUID"] = uid;

    loadAvatar(user.photoURL);
    let name = user.displayName
    if (!name) {
      name = "No Name"
    }
    loadName(name);
  } else {
    window["firebaseUID"] = null;
    loadAvatar(null);
    loadName("Unknown");
    loadTag("Log in to play with friends.");
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