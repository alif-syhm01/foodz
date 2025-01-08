<script setup>
import BaseButton from "@/ui/BaseButton.vue";
</script>

<template>
  <nav>
    <ul class="flex items-center gap-8">
      <li>
        <BaseButton :is-active="true" :is-link="true" :to="'home'">
          Home
        </BaseButton>
      </li>
      <li>
        <BaseButton :is-link="true" :to="'menu'">Menu</BaseButton>
      </li>
      <li>
        <BaseButton :is-link="true" :to="'blog'">Blog</BaseButton>
      </li>
      <li>
        <BaseButton :is-link="true" :to="'contact'">Contact</BaseButton>
      </li>
      <li>
        <BaseButton :is-link="true" :to="'menu'" :theme="'full'">
          Order Now
        </BaseButton>
      </li>
    </ul>
  </nav>
</template>
