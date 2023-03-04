<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStyleStore } from "@/stores/style.js";
import { gradientBgDark } from "@/utils/colors";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import notie from "@/plugins/notie";


const styleStore = useStyleStore();
onMounted(() => {
    notie.alert({ type: 4, text: 'The website is still in development, and some functionality is not ready yet.', stay: true });
});

const router = useRouter();
</script>

<template>
    <div :class="styleStore.mainGradient" class="flex min-h-screen items-center justify-center">
        <SectionMain>
            <h1 class="text-4xl md:text-5xl text-center text-white font-bold mt-12 mb-3 lg:mt-0">
                Pick a user&hellip;
            </h1>
            <h2 class="text-xl md:text-xl text-center text-white mb-12">
                We support 3 types of users
                <code class="px-1.5 py-0.5 rounded bg-white bg-opacity-20">Admin</code>,
                <code class="px-1.5 py-0.5 rounded bg-white bg-opacity-20">Docent</code>,
                <code class="px-1.5 py-0.5 rounded bg-white bg-opacity-20">Student</code>
            </h2>
            <div class="grid gap-4 grid-cols-1 lg:grid-cols-3 px-6 max-w-6xl mx-auto">
                <CardBox class="cursor-pointer bg-gray-50" @click="router.push({ name: 'admin-login' })" is-hoverable>

                    <h1 class="text-xl md:text-2xl font-black capitalize">
                        Admin
                    </h1>
                    <h2 class="text-md md:text-lg">Basic CRUD</h2>
                </CardBox>
                <CardBox class="cursor-pointer bg-gray-50" @click="router.push({ name: 'docent-login' })" is-hoverable>

                    <h1 class="text-xl md:text-2xl font-black capitalize">
                        Docent
                    </h1>
                    <h2 class="text-md md:text-lg">Proctoring & Question Generator</h2>
                </CardBox>
                <CardBox class="cursor-pointer bg-gray-50" @click="router.push({ name: 'student-login' })" is-hoverable>

                    <h1 class="text-xl md:text-2xl font-black capitalize">
                        Student
                    </h1>
                    <h2 class="text-md md:text-lg">Online Exam</h2>
                </CardBox>
            </div>
        </SectionMain>
    </div>
</template>