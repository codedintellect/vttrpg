import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
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

if (auth.currentUser == null) {
  setPersistence(auth, browserLocalPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, "test@example.com", "unsecure");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
else {
  $(".register-prompt").remove();
}

onAuthStateChanged(auth, user => {
  console.log(user);
});
  