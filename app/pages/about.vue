<script setup lang="ts">
const { t } = useI18n()
const { profile, seo } = useAppConfig()
useHead(() => ({
  title: `${profile.name} - ${t('about.title')}`,
  meta: [
    {
      name: 'description',
      content: `${profile.name}, ${profile.job}, ${t('about.title')}.`,
    },
    {
      property: 'og:title',
      content: `${profile.name} - Contact - Portfolio`,
    },
    {
      property: 'og:description',
      content: `${profile.name}, ${profile.job}, ${t('about.title')}.`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${seo.url}/about`,
    },
  ],
}))
</script>

<template>
  <div class=" bg-zinc-950">
    <AboutPage />
  </div>
</template>
