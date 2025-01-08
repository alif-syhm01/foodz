<script setup>
import BaseButton from "@/ui/BaseButton.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import BibimbapImage from "@/assets/hero/desktop/desktop-hero-bibimbap.png";
</script>

<template>
  <section
    class="relative overflow-hidden bg-white pt-28 after:content-desktop-hero-background z-[2] after:block after:absolute after:w-full after:top-[9rem] after:left-[50%] after:-z-10"
  >
    <BaseContainer>
      <div class="flex flex-col items-start">
        <h1
          class="w-full max-w-[43.75rem] font-normal tracking-normal font-alice text-7xl leading-[1.2]"
        >
          You've Got Questions. We've Got Taste.
        </h1>
        <p
          class="w-full max-w-[40.625rem] leading-relaxed mt-3 text-2xl font-normal font-poppins text-neutral-4"
        >
          Explore your Taste with special food in the special place. This text
          don't have any meaning.
        </p>
        <div class="flex items-center gap-6 mt-9">
          <BaseButton :is-link="true" :to="menu" :theme="'full'">
            Order Now
          </BaseButton>
          <RouterLink
            :to="menu"
            class="text-base font-normal font-poppins text-primary"
          >
            Explore menu
          </RouterLink>
        </div>
        <div
          class="flex items-center justify-center gap-[3.75rem] bg-neutral-7 rounded-2xl px-14 py-7 mt-40 mb-14"
        >
          <div class="flex flex-col items-center">
            <h4 class="font-poppins text-[2rem] font-semibold text-neutral-4">
              9+
            </h4>
            <p class="text-xl font-normal font-poppins text-neutral-4">
              years of service.
            </p>
          </div>
          <div class="self-stretch border-l border-l-neutral-6"></div>
          <div class="flex flex-col items-center">
            <h4 class="font-poppins text-[2rem] font-semibold text-neutral-4">
              120+
            </h4>
            <p class="text-xl font-normal font-poppins text-neutral-4">
              store in the world.
            </p>
          </div>
        </div>
      </div>
      <div
        class="relative before:content-desktop-hero-sugar before:block before:absolute before:w-full before:top-1 before:left-[92%] before:z-10 after:content-desktop-hero-chopstick after:block after:absolute after:top-96 after:right-44 after:z-10"
      >
        <img
          class="w-full -translate-y-20 -translate-x-14"
          :src="BibimbapImage"
          alt="Bibimbap"
        />
      </div>
    </BaseContainer>
  </section>
</template>
