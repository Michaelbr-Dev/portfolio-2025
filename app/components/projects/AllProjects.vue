<script setup lang="ts">
import type { Projects } from '~/types/project'

const { t } = useI18n()
const { getAllProjects } = useProjects()
const AllProjects: Projects = getAllProjects()
</script>

<template>
  <section class="relative -mt-12 bg-zinc-950">
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-grid-pattern opacity-[0.03]"
      />
    </div>
    <div class="relative mx-auto flex max-w-7xl flex-col justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8 lg:py-8">
      <!-- spotlight -->
      <div
        class="absolute -top-8 left-1/2 size-72 -translate-x-1/2 rounded-full lg:-top-8 lg:size-[32rem] lg:blur-[200px]"
      />
      <div class="mt-16 p-2 flex flex-col gap-1">
        <h3 class="text-zinc-300 text-white-shadow text-center font-newsreader italic text-3xl sm:text-3xl md:text-4xl">
          {{ t('projects.title') }}
        </h3>
        <p class="text-zinc-400 text-center">
          {{ t('projects.subtitle') }}
        </p>
      </div>
      <Divider />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 my-6">
        <SpotlightCard
          v-for="project in AllProjects"
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
