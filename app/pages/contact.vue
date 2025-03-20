<script setup lang="ts">
const { t } = useI18n()
const { profile, seo } = useAppConfig()
useHead(() => ({
  title: `${profile.name} - ${t('contact.title')}`,
  meta: [
    {
      name: 'description',
      content: `${profile.name}, ${profile.job}, ${t('contact.title')}.`,
    },
    {
      property: 'og:title',
      content: `${profile.name} - ${t('contact.title')}`,
    },
    {
      property: 'og:description',
      content: `${profile.name}, ${profile.job}, ${t('contact.title')}.`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${seo.url}/contact`,
    },
  ],
}))
</script>

<template>
  <div class=" bg-zinc-950">
    <ContactForm />
  </div>
</template>
