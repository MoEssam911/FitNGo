import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpP28_aTu3tKSLT55_dDeoInFpTv0w7LI",
  authDomain: "fitngo-project.firebaseapp.com",
  projectId: "fitngo-project",
  storageBucket: "fitngo-project.appspot.com",
  messagingSenderId: "60919017979",
  appId: "1:60919017979:web:1c5f360e87066596b81b5e",
  measurementId: "G-5GEKZ0KBVM",
};

// init firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const storage = getStorage(app)

export { auth, storage };