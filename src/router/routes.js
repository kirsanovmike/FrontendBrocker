import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("pages/Home.vue")
      },
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
        path: "reviews-brokers",
        name: "Reviews",
        component: () => import("pages/Reviews.vue")
      },
      {
        path: "reviews-brokers/:id",
        name: "BrokerReview",
        component: () => import("../views/BrokerReview.vue")
      }
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
