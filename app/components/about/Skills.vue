<script setup lang="ts">
import type { Skills } from '~/types/skill'

const { getAllSkills } = useSkills()
const AllSkills: Skills = getAllSkills()
</script>

<template>
  <section class="mx-auto flex max-w-4xl flex-col md:mt-12 sm:mt-12">
    <div class="flex flex-col gap-3">
      <div class="flex justify-center flex-wrap gap-4 p-2 mb-12">
        <SpotlightCard
          v-for="skill in AllSkills"
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
