import { createApp } from "vue";
import App from "./app.vue";
// import router from "./router";
import { store } from "./store";
import "./tailwind.js";
import "./assets/main.css";
import "./assets/style.css";
import "./assets/tablericons.css";

const app = createApp(App);

// app.use(router);
app.use(store);

app.mount("#app");
