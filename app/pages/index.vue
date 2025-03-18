<script setup lang="ts">
const HomeProjects = defineAsyncComponent(() => import('../components/home/Projects.vue'))
const HomeSkills = defineAsyncComponent(() => import('../components/home/Skills.vue'))
</script>

<template>
  <div class=" bg-zinc-950">
    <HeroSection />
    <Divider />
    <HomeSkills />
    <Divider />
    <HomeProjects />
  </div>
</template>
