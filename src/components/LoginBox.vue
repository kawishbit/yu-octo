<script setup>
import { reactive, defineEmits, onMounted } from "vue";
import { useRouter } from "vue-router";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import SectionFullScreen from "@/components/SectionFullScreen.vue";
import CardBox from "@/components/CardBox.vue";
import FormCheckRadio from "@/components/FormCheckRadio.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import LayoutGuest from "@/layouts/LayoutGuest.vue";
import Logo from "@/components/Logo.vue";
import { useStyleStore } from "@/stores/style";
import notie from "@/plugins/notie";

const emit = defineEmits(['submit']);
const styleStore = useStyleStore();

const form = reactive({
    login: "john.doe",
    pass: "highly-secure-password-fYjUw-",
    remember: true,
});

const router = useRouter();

const submit = () => {
    emit("submit", form);
};

onMounted(() => {
    notie.alert({ type: 4, text: 'The website is still in development, and some functionality is not ready yet.', stay: true });
});
</script>

<template>
    <SectionFullScreen v-slot="{ cardClass }">
        <Logo color="#fff" logo-class="w-48 my-10" />
        <CardBox :class="cardClass" is-form @submit.prevent="submit">
            <FormField label="Login" help="Please enter your login">
                <FormControl v-model="form.login" :icon="mdiAccount" name="login" autocomplete="username" />
            </FormField>

            <FormField label="Password" help="Please enter your password">
                <FormControl v-model="form.pass" :icon="mdiAsterisk" type="password" name="password"
                    autocomplete="current-password" />
            </FormField>

            <FormCheckRadio v-model="form.remember" name="remember" label="Remember" :input-value="true" />

            <template #footer>
                <BaseButtons>
                    <BaseButton type="submit" color="info" label="Login" />
                    <BaseButton to="/" color="info" outline label="Back" />
                </BaseButtons>
            </template>
        </CardBox>
    </SectionFullScreen>
</template>