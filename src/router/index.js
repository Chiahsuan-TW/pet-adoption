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
    path: "/tracking",
    name: "Tracking",
    component: () => import("../views/Tracking.vue"),
  },
  {
    path: "/volunteer",
    name: "Volunteer",
    component: () => import("../views/Volunteer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
