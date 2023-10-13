<<<<<<< HEAD
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "./assets/global.css";

import "@fortawesome/fontawesome-svg-core";

const app = createApp(App);

app.use(router);

=======
import "./style.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-svg-core'


/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

>>>>>>> 9eb51457023a96de468dee9b2e6be1260e9d8183
app.mount("#app");
