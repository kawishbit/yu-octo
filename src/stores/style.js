import { defineStore } from "pinia";
import * as styles from "@/utils/styles";
import { STYLE_KEY } from "@/utils/constant";

export const useStyleStore = defineStore("style", {
  state: () => ({
    mainColorIndex: 0,
    mainColor: "",
    mainGradient: "",
    cardBoxBg: "",
    aside: "",
    asideScrollbars: "",
    asideBrand: "",
    asideLogo: "",
    asideMenuItem: "",
    asideMenuItemActive: "",
    asideMenuDropdown: "",
    navBarItemLabel: "",
    navBarItemLabelHover: "",
    navBarItemLabelActiveColor: "",
    overlay: "",
  }),
  actions: {
    setStyle(payload) {
      if (!styles[payload]) {
        return;
      }
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(STYLE_KEY, payload);
      }

      const style = styles[payload];
      for (const key in style) {
        this[key] = style[key];
      }
    },
  },
});
