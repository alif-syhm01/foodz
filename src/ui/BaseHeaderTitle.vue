<script setup>
import { computed } from "vue";

const baseHeaderTitleProps = defineProps({
  headerText: {
    type: String,
    required: true,
  },
  headerHighlightText: {
    type: String,
    required: false,
  },
  paragraphText: {
    type: String,
    required: false,
  },
});

const headerTitle = computed(() => {
  const splitHeaderText = baseHeaderTitleProps.headerText.split(" ");
  const highlightText = baseHeaderTitleProps.headerHighlightText;

  const specialFormatHeaderTitle = splitHeaderText
    .map((text) => {
      return text === highlightText
        ? `<span class="text-primary">${highlightText}</span>`
        : `${text}`;
    })
    .join(" ");

  return specialFormatHeaderTitle;
});
</script>

<template>
  <div class="flex flex-col gap-3 text-center">
    <h2 class="text-5xl font-normal font-alice" v-html="headerTitle"></h2>
    <p
      class="w-full max-w-[48.125rem] font-poppins text-2xl font-normal text-neutral-4"
    >
      {{ baseHeaderTitleProps.paragraphText }}
    </p>
  </div>
</template>
