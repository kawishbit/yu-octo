<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import { useStyleStore } from "@/stores/style.js";
import { mdiMinus, mdiPlus } from "@mdi/js";
import { getButtonColor } from "@/utils/colors";
import BaseIcon from "@/components/BaseIcon.vue";
import AsideMenuList from "@/components/AsideMenuList.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isDropdownList: Boolean,
});

const emit = defineEmits(["menu-click"]);

const styleStore = useStyleStore();

const hasColor = computed(() => props.item && props.item.color);

const asideMenuItemActive = computed(() =>
  hasColor.value ? "" : styleStore.asideMenuItemActive
);

const isDropdownActive = ref(false);

const componentClass = computed(() => [
  props.isDropdownList ? "py-3 px-6 text-sm" : "py-3",
  hasColor.value
    ? getButtonColor(props.item.color, false, true)
    : `${styleStore.asideMenuItem} dark:text-slate-300 dark:hover:text-white`,
]);

const hasDropdown = computed(() => !!props.item.menu);

const menuClick = (event) => {
  emit("menu-click", event, props.item);

  if (hasDropdown.value) {
    isDropdownActive.value = !isDropdownActive.value;
  }
};
</script>

<template>
  <li>
    <component :is="item.to ? RouterLink : 'a'" v-slot="vSlot" :to="item.to ?? null" :href="item.href ?? null"
      :target="item.target ?? null" class="flex cursor-pointer" :class="componentClass" @click.stop="menuClick">
      <BaseIcon v-if="item.icon" :path="item.icon" class="flex-none"
        :class="[vSlot && vSlot.isExactActive ? asideMenuItemActive : '']" w="w-16" :size="18" />
      <span class="grow text-ellipsis line-clamp-1" :class="[
        { 'pr-12': !hasDropdown },
        vSlot && vSlot.isExactActive ? asideMenuItemActive : '',
      ]">{{ item.label }}</span>
      <div v-if="hasDropdown" @click.stop="menuClick">
        <BaseIcon :path="isDropdownActive ? mdiMinus : mdiPlus" class="flex-none"
          :class="[vSlot && vSlot.isExactActive ? asideMenuItemActive : '']" w="w-12" />
      </div>
    </component>
    <AsideMenuList v-if="hasDropdown" :menu="item.menu" :class="[
      styleStore.asideMenuDropdown,
      isDropdownActive ? 'block' : 'hidden',
    ]" is-dropdown-list />
  </li>
</template>
