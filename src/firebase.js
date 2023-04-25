import { initializeApp } from "firebase/app";
import {
    getAuth,
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
    signInWithEmailAndPassword(auth, "test@example.com", "unsecure")
      .then((userCredential) => {
          console.log(userCredential.user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
      });
}
else {
    $(".register-prompt").remove();
}