import "./style.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-svg-core'
import "./assets/global.css";
import 'tailwindcss/tailwind.css'


/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(router)

app.mount("#app");

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDpP28_aTu3tKSLT55_dDeoInFpTv0w7LI",
//   authDomain: "fitngo-project.firebaseapp.com",
//   projectId: "fitngo-project",
//   storageBucket: "fitngo-project.appspot.com",
//   messagingSenderId: "60919017979",
//   appId: "1:60919017979:web:1c5f360e87066596b81b5e",
//   measurementId: "G-5GEKZ0KBVM"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);






