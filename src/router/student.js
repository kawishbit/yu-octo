export const studentRoutes = [
  {
    path: "/student",
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
            name: "student-login",
            component: () => import("@/views/LoginView.vue"),
          },
        ],
      },
      {
        path: "",
        component: () => import("@/layouts/LayoutStudent.vue"),
        meta: {
          requiresAuth: true,
          role: ["student"],
        },
        children: [
          {
            path: "dashboard",
            name: "student-dashboard",
            component: () => import("@/views/DashboardView.vue"),
          },
        ],
      },
    ],
  },
];
