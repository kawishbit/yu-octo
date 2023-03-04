import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./routers";
import { useStyleStore } from "@/stores/style.js";
import { STYLE_KEY } from "@/utils/constant";
import NProgress from "nprogress";

import "./assets/css/main.css";
import { Themes } from "./utils/enum";

NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });

/* Init Pinia */
const pinia = createPinia();

/* Create Vue app */
createApp(App).use(router).use(pinia).mount("#app");

/* Init Pinia stores */
const styleStore = useStyleStore(pinia);

/* App style */
styleStore.setStyle(localStorage[STYLE_KEY] ?? Themes.Midnight);

/* Default title tag */
const defaultDocumentTitle = "YU-OCTO | Your University Online Proctor";

/* Set document title from route meta */
router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title} — ${defaultDocumentTitle}`
    : defaultDocumentTitle;
});
