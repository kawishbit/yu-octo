<script setup>
import { computed } from "vue";
import { useStyleStore } from "@/stores/style";
import {
  gradientBgPurplePink,
  gradientBgDark,
  gradientBgPinkRed,
} from "@/utils/colors";
import { Themes } from "@/utils/enum";

const styleStore = useStyleStore();
</script>

<template>
  <div class="flex flex-col min-h-screen items-center justify-center" :class="styleStore.mainGradient">
    <slot card-class="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl" />
  </div>
</template>
