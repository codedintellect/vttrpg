import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
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

const auth = getAuth();
setPersistence(auth, browserLocalPersistence);

onAuthStateChanged(auth, user => {
  console.log(user);
  if (user != null) {
    $(".register-prompt").remove();
  }
});

function emailSignUp() {
  createUserWithEmailAndPassword(auth, $("#social-email").val(), $("#social-password").val())
    .catch((error) => {
      $(".two-options").css("border", "3px solid var(--nord11)");
      $(".two-options").css("transition", "0.5s");
    });
}

function emailLogin() {
  signInWithEmailAndPassword(auth, $("#social-email").val(), $("#social-password").val());
}

function logout() {
  signOut(auth);
}

window.emailSignUp = emailSignUp;
window.emailLogin = emailLogin;
window.logout = logout;