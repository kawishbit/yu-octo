export const adminRoutes = [
  {
    path: "/admin",
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
            name: "admin-login",
            component: () => import("@/views/admin/LoginView.vue"),
          },
        ],
      },
      {
        path: "",
        component: () => import("@/layouts/LayoutAdmin.vue"),
        meta: {
          requiresAuth: true,
          role: ["Admin"],
        },
        children: [
          {
            path: "dashboard",
            name: "admin-dashboard",
            component: () => import("@/views/admin/DashboardView.vue"),
          },
        ],
      },
    ],
  },
];
