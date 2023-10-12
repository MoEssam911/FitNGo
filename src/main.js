import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "./assets/global.css";

import "@fortawesome/fontawesome-svg-core";

const app = createApp(App);

app.use(router);

app.mount("#app");
