import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "@/views/MainView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main-view",
    component: MainView
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/browse",
    name: "browse",
    component: () => import("../views/Browse.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
