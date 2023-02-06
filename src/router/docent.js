export const docentRoutes = [
  {
    path: "/docent",
    children: [
      {
        path: "",
        component: () => import("@/layouts/LayoutGuest.vue"),
        meta: {
          requiresAuth: false,
        },
        children: [
          {
            path: "login",
            name: "docent-login",
            component: () => import("@/views/LoginView.vue"),
          },
        ],
      },
      {
        path: "",
        component: () => import("@/layouts/LayoutDocent.vue"),
        meta: {
          requiresAuth: true,
          role: ["docent"],
        },
        children: [
          {
            path: "dashboard",
            name: "docent-dashboard",
            component: () => import("@/views/DashboardView.vue"),
          },
        ],
      },
    ],
  },
];
