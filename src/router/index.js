import { createRouter, createWebHistory } from "vue-router";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [],
// });

const routes = [
  {
    path: "/",
    name: "Home",
    component: "",
  },
  // other routes...
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
