<script setup>
import { useStyleStore } from "@/stores/style.js";

const styleStore = useStyleStore();
</script>

<template>
  <div :class="styleStore.mainColor">
    <div class="bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
      <router-view></router-view>
    </div>
  </div>
</template>
