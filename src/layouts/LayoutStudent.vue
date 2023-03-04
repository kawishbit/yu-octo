<script setup>
import { mdiForwardburger, mdiBackburger, mdiMenu } from "@mdi/js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { studentSidebar } from "@/utils/sidebar";
import { studentNavbar } from "@/utils/navbar";
import { useMainStore } from "@/stores/main.js";
import { useStyleStore } from "@/stores/style.js";
import { Themes } from "@/utils/enum.js";
import BaseIcon from "@/components/BaseIcon.vue";
import FormControl from "@/components/FormControl.vue";
import NavBar from "@/components/NavBar.vue";
import NavBarItemPlain from "@/components/NavBarItemPlain.vue";
import AsideMenu from "@/components/AsideMenu.vue";
import FooterBar from "@/components/FooterBar.vue";

useMainStore().setUser({
    name: "John Doe",
    email: "john@example.com",
    avatar:
        "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93",
});

const layoutAsidePadding = "xl:pl-60";

const styleStore = useStyleStore();

const router = useRouter();

const isAsideMobileExpanded = ref(false);
const isAsideLgActive = ref(false);

router.beforeEach(() => {
    isAsideMobileExpanded.value = false;
    isAsideLgActive.value = false;
});

const menuClick = (event, item) => {
    console.log(event, item);
    if (item.isToggleTheme) {
        let currIndex = styleStore.mainColorIndex;
        let newIndex = currIndex + 1;
        let themes = Themes.getAllArray();
        newIndex = newIndex > themes.length - 1 ? 0 : newIndex;
        console.log(newIndex);
        let theme = themes[newIndex];
        styleStore.setStyle(theme);
    }

    if (item.isLogout) {
        //
    }
};
</script>

<template>
    <div :class="[styleStore.mainColor, {
        'overflow-hidden lg:overflow-visible': isAsideMobileExpanded,
    }]">
        <div :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
            class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
            <NavBar :menu="studentNavbar" :class="[
                layoutAsidePadding,
                { 'ml-60 lg:ml-0': isAsideMobileExpanded },
            ]" @menu-click="menuClick">
                <NavBarItemPlain display="flex lg:hidden"
                    @click.prevent="isAsideMobileExpanded = !isAsideMobileExpanded">
                    <BaseIcon :path="isAsideMobileExpanded ? mdiBackburger : mdiForwardburger" size="24" />
                </NavBarItemPlain>
                <NavBarItemPlain display="hidden lg:flex xl:hidden" @click.prevent="isAsideLgActive = true">
                    <BaseIcon :path="mdiMenu" size="24" />
                </NavBarItemPlain>
                <NavBarItemPlain use-margin>
                    <FormControl placeholder="Search (ctrl+k)" ctrl-k-focus transparent borderless />
                </NavBarItemPlain>
            </NavBar>
            <AsideMenu :is-aside-mobile-expanded="isAsideMobileExpanded" :is-aside-lg-active="isAsideLgActive"
                :menu="studentSidebar" @menu-click="menuClick" @aside-lg-close-click="isAsideLgActive = false" />
            <router-view></router-view>
            <FooterBar>
                Get more with
                <a href="https://tailwind-vue.justboil.me/" target="_blank" class="text-blue-600">Premium version</a>
            </FooterBar>
        </div>
    </div>
</template>
