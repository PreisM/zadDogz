import Vue from "vue";
import "@progress/kendo-ui";
import "@progress/kendo-vue-intl";
import "@progress/kendo-theme-material/dist/all.css";
import { Input } from "@progress/kendo-vue-inputs";
import { Button, ButtonsInstaller} from "@progress/kendo-buttons-vue-wrapper";
import App from "./App.vue";
import { KendoPopupsInstaller } from '@progress/kendo-popups-vue-wrapper'

Vue.use(ButtonsInstaller);
Vue.use(KendoPopupsInstaller)
Vue.component("k-input", Input);
Vue.component("k-button", Button);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
