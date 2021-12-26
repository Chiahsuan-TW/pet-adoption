import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/search/:id",
    name: "info",
    props: true,
    component: () => import("../views/Info.vue"),
  },
  {
    path: "/tracking",
    name: "Tracking",
    component: () => import("../views/Tracking.vue"),
  },
  {
    path: "/volunteer",
    name: "Volunteer",
    component: () => import("../views/Volunteer.vue"),
  },
  {
    path: "/management",
    name: "Management",
    component: () => import("../views/Management.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
