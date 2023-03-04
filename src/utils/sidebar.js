import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact,
  mdiNotebookOutline,
} from "@mdi/js";

export const studentSidebar = [
  {
    to: "/student/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },
  {
    to: "/student/2022-02/courses",
    label: "Courses",
    icon: mdiNotebookOutline,
    menu: [
      {
        to: "/student/2022-02/courses",
        label: "2022-02",
      },
      {
        to: "/student/2022-01/courses",
        label: "2022-01",
      },
    ],
  },
  {
    to: "/student/tasks",
    label: "Tasks",
    icon: mdiSquareEditOutline,
  },
];
export const docentSidebar = [];
export const adminSidebar = [];
//   {
//     to: "/dashboard",
//     icon: mdiMonitor,
//     label: "Dashboard",
//   },
//   {
//     to: "/tables",
//     label: "Tables",
//     icon: mdiTable,
//   },
//   {
//     to: "/forms",
//     label: "Forms",
//     icon: mdiSquareEditOutline,
//   },
//   {
//     to: "/ui",
//     label: "UI",
//     icon: mdiTelevisionGuide,
//   },
//   {
//     to: "/responsive",
//     label: "Responsive",
//     icon: mdiResponsive,
//   },
//   {
//     to: "/",
//     label: "Styles",
//     icon: mdiPalette,
//   },
//   {
//     to: "/profile",
//     label: "Profile",
//     icon: mdiAccountCircle,
//   },
//   {
//     to: "/login",
//     label: "Login",
//     icon: mdiLock,
//   },
//   {
//     to: "/error",
//     label: "Error",
//     icon: mdiAlertCircle,
//   },
//   {
//     label: "Dropdown",
//     icon: mdiViewList,
//     menu: [
//       {
//         label: "Item One",
//       },
//       {
//         label: "Item Two",
//       },
//     ],
//   },
//   {
//     href: "https://github.com/justboil/admin-one-vue-tailwind",
//     label: "GitHub",
//     icon: mdiGithub,
//     target: "_blank",
//   },
//   {
//     href: "https://github.com/justboil/admin-one-react-tailwind",
//     label: "React version",
//     icon: mdiReact,
//     target: "_blank",
//   },
