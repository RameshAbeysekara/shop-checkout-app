import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "es6-promise/auto";
import store from "./store";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import PrimeVue from 'primevue/config';

const app = createApp(App);

app.use(PrimeVue);
app.use(store);
app.use(router);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);

app.mount("#app");
