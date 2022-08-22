import { createApp } from "vue";
import { i18n } from "./i18n.js";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(i18n);
app.mount('#app');