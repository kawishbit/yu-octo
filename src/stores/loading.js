import { defineStore } from "pinia";
import NProgress from "nprogress";

const loadingStore = useLoadingStore(pinia);
export const useLoadingStore = defineStore("alerts", () => {
  const loading = ref(0);
  const style = ref("slide");

  watch(loading, (newVal, oldVal) => {
    if (newVal === 0) return NProgress.done();
    if (oldVal === 0) return NProgress.start();
    NProgress.set(1.8 / Math.max(oldVal, newVal));
  });

  function start() {}

  function stop() {}

  return { loading, style, start, stop };
});
