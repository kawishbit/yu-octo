import { createRouter, createWebHistory } from "vue-router";
import { adminRoutes } from "./admin";
import { studentRoutes } from "./student";
import { docentRoutes } from "./docent";

const routes = [
  {
    path: "",
    component: () => import("@/layouts/LayoutGuest.vue"),
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: "/",
        name: "select-user",
        component: () => import("@/views/ChoiceView.vue"),
      },
    ],
  },
  ...adminRoutes,
  ...studentRoutes,
  ...docentRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
