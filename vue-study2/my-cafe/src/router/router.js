import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home.vue";
import Menus from "@/components/Menus.vue";
import Events from "@/components/Events";
import Reviews from "@/components/Reviews";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/menus", component: Menus },
    { path: "/menus/:menu_id", component: Menus },
    { path: "/events", component: Events },
    { path: "/events/:event_id", component: Event, props: true },
    { path: "/reviews", component: Reviews },
  ],
});
