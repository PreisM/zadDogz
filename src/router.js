import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Reminder from "./views/Reminder.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/reminder",
      name: "Reminder",
      component: Reminder,
    },
  ],
});
