import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
Vue.use(VueMaterial);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
