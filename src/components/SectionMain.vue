<script setup>
import { containerMaxW } from "@/utils/styles";
</script>

<template>
  <section class="p-6" :class="containerMaxW">
    <slot />
  </section>
</template>
