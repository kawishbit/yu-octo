<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStyleStore } from "@/stores/style";
import LoginBox from "@/components/LoginBox.vue";

const styleStore = useStyleStore();

const form = reactive({
  login: "john.doe",
  pass: "highly-secure-password-fYjUw-",
  remember: true,
});

const router = useRouter();

const submit = (data) => {
  // router.push({ name: 'student-dashboard' });
};
</script>

<template>
  <LoginBox @submit="submit" />
</template>
