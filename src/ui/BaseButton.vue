<script setup>
import { computed } from "vue";

const buttonProps = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  isLink: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    required: false,
    default: "",
  },
  theme: {
    type: String,
    required: false,
    default: "text",
  },
});

const buttonTheme = computed(() => {
  let themeClass = "";

  if (buttonProps.theme === "text") {
    themeClass = `text-base font-medium font-poppins transition-all hover:text-primary ${
      buttonProps.isActive ? "text-primary" : "text-neutral-4"
    }`;
  }

  if (buttonProps.theme === "full") {
    themeClass =
      "text-base font-medium font-poppins bg-primary text-neutral-8 uppercase px-5 py-2.5 rounded-lg transition-all hover:bg-green-600";
  }

  return themeClass;
});
</script>

<template>
  <button v-if="!buttonProps.isLink" :class="buttonTheme">
    <slot></slot>
  </button>

  <RouterLink v-else :to="to" :class="buttonTheme">
    <slot></slot>
  </RouterLink>
</template>
