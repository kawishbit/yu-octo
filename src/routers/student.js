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
            component: () => import("@/views/student/LoginView.vue"),
          },
        ],
      },
      {
        path: "",
        component: () => import("@/layouts/LayoutGuest.vue"),
        meta: {
          requiresAuth: true,
          role: ["student"],
        },
        children: [
          {
            path: ":yearId/courses/:courseId/subjects/:subjectId/tasks/:taskId/exam-mode",
            name: "student-courses-subjects-tasks-exam-mode",
            component: () => import("@/views/student/exam/ExamView.vue"),
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
            component: () => import("@/views/student/DashboardView.vue"),
          },
          {
            path: ":yearId/courses",
            name: "student-courses",
            component: () => import("@/views/student/course/CourseView.vue"),
          },
          {
            path: "tasks",
            name: "student-tasks",
            component: () => import("@/views/student/course/TaskView.vue"),
          },
          {
            path: ":yearId/courses/:courseId/subjects/:subjectId/tasks/:taskId/exam-prompt",
            name: "student-courses-subjects-tasks-exam-prompt",
            component: () => import("@/views/student/exam/ExamPrefaceView.vue"),
          },
        ],
      },
    ],
  },
];
