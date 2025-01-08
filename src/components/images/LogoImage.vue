<script setup>
import LogoDekstop from "@/assets/foodz-desktop-logo.png";
import LogoMobile from "@/assets/foodz-mobile-logo.png";
</script>

<template>
  <picture>
    <source media="(max-width: 500px)" :srcset="LogoMobile" />
    <source media="(min-width: 600px)" :srcset="LogoDekstop" />
    <img :src="LogoDekstop" alt="Foodz Logo" />
  </picture>
</template>
