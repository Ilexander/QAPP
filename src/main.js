import { createApp } from "vue";
import App from "./app.vue";
// import router from "./router";
import { store } from "./store";
import "./tailwind.js";
import "./assets/main.css";
import "./assets/style.css";
import "./assets/tablericons.css";
import { initCoreComponents } from "./core/core-components.js";

const app = createApp(App);
initCoreComponents(app);

// app.use(router);
app.use(store);

app.mount("#app");
