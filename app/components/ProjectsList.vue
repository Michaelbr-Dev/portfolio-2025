<script setup lang="ts">
const { t } = useI18n()
const { getAllProjects, getProjectImageUrl } = useProjects()
const projects = getAllProjects()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <SpotlightCard
      v-for="project in projects"
      :key="project.id"
      white
    >
      <div class="flex flex-col gap-4 p-6">
        <NuxtImg
          :src="getProjectImageUrl(project.image)"
          :alt="project.name"
          class="rounded-lg w-full h-48 object-cover"
        />
        <div class="flex flex-col gap-2">
          <h4 class="text-xl font-newsreader text-zinc-300">
            {{ project.name }}
          </h4>
          <p class="text-zinc-400 text-sm">
            {{ project.description }}
          </p>
          <div class="flex gap-2 flex-wrap mt-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-2 py-0.5 text-xs rounded-full bg-zinc-800"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="flex gap-2 flex-wrap">
          <NuxtLink
            v-for="link in project.url"
            :key="link.url"
            :to="link.url"
            target="_blank"
            class="px-3 py-1 text-sm rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </SpotlightCard>
  </div>
</template>
