import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue") },
      {
        path: "brokers",
        name: "Brokers",
        component: () => import("pages/Brokers.vue")
      },
      {
        path: "about",
        name: "About",
        component: () => import("pages/About.vue")
      },
      {
        path: "reviews",
        name: "Reviews",
        component: () => import("pages/Reviews.vue")
      },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes
