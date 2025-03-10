<script setup lang="ts">
const socialMediaRegexMap = [
  { regex: /github\.com/, name: 'GitHub', icon: 'custom:github' },
  { regex: /linkedin\.com/, name: 'LinkedIn', icon: 'custom:linkedin' },
]

const { socials } = useAppConfig()
const mappedSocials = Object.values(socials).map((link) => {
  const foundSocial = socialMediaRegexMap.find(social => social.regex.test(link))
  if (!foundSocial) throw new Error(`No social media found for link: ${link}`)
  const { name, icon } = foundSocial
  return { name, link, icon }
})
</script>

<template>
  <div class="my-7 flex items-center justify-center gap-6 sm:gap-10">
    <NuxtLink
      v-for="social in mappedSocials"
      :key="social.name"
      :to="social.link"
      target="_blank"
      class="flex items-center justify-center transform transition-transform duration-200 hover:scale-110"
      :aria-label="'Go to ' + social.name + ' profile'"
    >
      <Icon
        :name="social.icon"
        class="text-neutral-500 hover:text-neutral-300"
        :size="28"
        :alt="social.name + ' logo'"
        :aria-label="social.name + ' logo'"
      />
    </NuxtLink>
  </div>
</template>
