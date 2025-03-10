<script setup lang="ts">
const { t } = useI18n()
const { getFeaturedSkills } = useSkills()
const featuredSkills = getFeaturedSkills()
</script>

<template>
  <section class="mx-auto flex max-w-4xl flex-col sm:mt-20 text-[var(--ui-text-toned)]">
    <div class="flex flex-col gap-3 -mt-10">
      <div
        class="mb-6 p-2 flex flex-col gap-1"
      >
        <h3
          class="
        text-zinc-300
        text-white-shadow
        font-newsreader
        italic
        text-3xl"
        >
          Stack
        </h3>
        <p class="text-zinc-400">
          {{ t('global.home.stacksubtitle') }}
        </p>
      </div>
      <div class="flex justify-center flex-wrap gap-4 p-2 mb-12">
        <SpotlightCard
          v-for="skill in featuredSkills"
          :key="skill.name"
          white
        >
          <NuxtLink
            :to="skill.link"
            target="_blank"
            :aria-label="skill.name + ' link'"
            class="flex gap-2 p-6"
          >
            <Icon
              :name="skill.icon"
              class="w-12 h-12"
              size="48"
              :alt="skill.name + ' logo'"
              :aria-label="skill.name + ' logo'"
            />
          </NuxtLink>
        </SpotlightCard>
      </div>
    </div>
  </section>
</template>
