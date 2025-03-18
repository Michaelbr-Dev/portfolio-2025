<script setup lang="ts">
import type { Projects } from '~/types/project'

const { t } = useI18n()
const { getFeaturedProjects } = useProjects()
const featuredProjects: Projects = getFeaturedProjects()
</script>

<template>
  <section class="mx-auto flex max-w-4xl flex-col md:mt-12 sm:mt-12">
    <div class="flex flex-col gap-3">
      <div class="mb-6 p-2 flex flex-col gap-1">
        <h3 class="text-zinc-300 text-white-shadow font-newsreader italic text-3xl sm:text-3xl md:text-4xl">
          {{ t('global.home.projects_title') }}
        </h3>
        <p class="text-zinc-400">
          {{ t('global.home.projects_subtitle') }}
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 mb-12">
        <SpotlightCard
          v-for="project in featuredProjects"
          :key="project.id"
          white
          class="group"
        >
          <NuxtLink
            :to="`/projects/${project.id}`"
            class="flex flex-col gap-4 p-6"
          >
            <div class="relative aspect-video overflow-hidden rounded-lg">
              <Img
                :src="project.image"
                :alt="project.name"
                loading="lazy"
                fit="cover"
                class="rounded-lg w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div class="flex flex-col gap-2">
              <h4 class="text-lg font-medium text-zinc-200">
                {{ project.name }}
              </h4>
              <p class="text-sm text-zinc-400">
                {{ project.description }}
              </p>
              <div class="flex gap-2 mt-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-400"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </SpotlightCard>
      </div>
    </div>
  </section>
</template>
