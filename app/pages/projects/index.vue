<script setup lang="ts">
const { t } = useI18n()
const { profile, seo } = useAppConfig()
useHead(() => ({
  title: `${profile.name} - ${t('projects.title')}`,
  meta: [
    {
      name: 'description',
      content: `${profile.name}, ${profile.job}, ${t('project.title')}.`,
    },
    {
      property: 'og:title',
      content: `${profile.name} - ${t('projects.title')}`,
    },
    {
      property: 'og:description',
      content: `${profile.name}, ${profile.job}, ${t('project.title')}.`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${seo.url}/projects`,
    },
  ],
}))
</script>

<template>
  <div class=" bg-zinc-950">
    <ProjectsAllProjects />
  </div>
</template>
