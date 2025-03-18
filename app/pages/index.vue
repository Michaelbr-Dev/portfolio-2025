<script setup lang="ts">
const HomeProjects = defineAsyncComponent(() => import('../components/home/Projects.vue'))
const HomeSkills = defineAsyncComponent(() => import('../components/home/Skills.vue'))
const { profile, seo } = useAppConfig()
useHead(() => ({
  title: `${profile.name} - Portfolio`,
  meta: [
    {
      name: 'description',
      content: `${profile.name}, ${profile.job}. ${seo.description}`,
    },
    {
      property: 'og:title',
      content: `${profile.name} - Portfolio`,
    },
    {
      property: 'og:description',
      content: `${profile.name}, ${profile.job}. ${seo.description}`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${seo.url}/`,
    },
  ],
}))
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
