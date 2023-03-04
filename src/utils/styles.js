import { gradientBgDark, gradientBgLight } from "./colors";

export const midnight = {
  mainColorIndex: 0,
  mainColor: "dark",
  mainGradient: gradientBgDark,
  cardBoxBg: "",
  aside: "bg-slate-900",
  asideScrollbars: "aside-scrollbars-gray",
  asideBrand: "bg-slate-900 text-white",
  asideLogo: "#fff",
  asideMenuItem: "text-gray-300 hover:text-white",
  asideMenuItemActive: "font-bold text-white",
  asideMenuDropdown: "bg-slate-800/25",
  navBarItemLabel: "text-black",
  navBarItemLabelHover: "hover:text-blue-500",
  navBarItemLabelActiveColor: "text-blue-600",
  overlay: "from-gray-700 via-gray-900 to-gray-700",
};

export const white = {
  mainColorIndex: 1,
  mainColor: "light",
  mainGradient: gradientBgLight,
  cardBoxBg: "",
  aside: "bg-white",
  asideScrollbars: "aside-scrollbars-light",
  asideBrand: "bg-white text-gray-900",
  asideLogo: "#6986ff",
  asideMenuItem: "text-gray-900 hover:text-black dark:text-white",
  asideMenuItemActive: "font-bold text-black dark:text-white",
  asideMenuDropdown: "bg-gray-100/75",
  navBarItemLabel: "text-blue-600",
  navBarItemLabelHover: "hover:text-black",
  navBarItemLabelActiveColor: "text-black",
  overlay: "from-white via-gray-100 to-white",
};

export const containerMaxW = "xl:max-w-6xl xl:mx-auto";
