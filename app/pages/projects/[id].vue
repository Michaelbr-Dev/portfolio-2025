<script setup lang="ts">
import { useI18n } from '#imports'
import type { Project } from '~/types/project'
import SpotlightButton from '~/components/SpotlightButton.vue'

const route = useRoute()
const router = useRouter()
const { getProject } = useProjects()
const { t, locale } = useI18n()
const { profile, seo } = useAppConfig()

const project = computed<Project | null>(() => getProject(route.params.id as string))

if (!project.value) {
  navigateTo('/')
}

const { getNextProject, getPreviousProject } = useProjects()

const nextProject = computed<Project | null>(() => getNextProject(route.params.id as string))
const previousProject = computed<Project | null>(() => getPreviousProject(route.params.id as string))

const goToNextProject = () => {
  if (nextProject.value) {
    navigateTo(`/projects/${nextProject.value.id}`)
  }
}

const goToPreviousProject = () => {
  if (previousProject.value) {
    navigateTo(`/projects/${previousProject.value.id}`)
  }
}

useHead(() => ({
  title: `${profile.name} - ${project.value.name}`,
  meta: [
    {
      name: 'description',
      content: project.value?.description || '',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${seo.url}/projects/${route.params.id}`,
    },
  ],
}))

const goToPrev = () => {
  try {
    if (window.history.length > 1) {
      router.back()
    }
    else {
      navigateTo('/')
    }
  }
  catch {
    navigateTo('/')
  }
}
</script>

<template>
  <div
    v-if="project"
    class="min-h-screen bg-zinc-950 px-4 -mt-14 pt-8 pb-6"
  >
    <!-- Navigation buttons -->
    <div class="fixed top-1/2 -translate-y-1/2 w-full max-w-7xl left-1/2 -translate-x-1/2 px-4 pointer-events-none">
      <div class="relative w-full grid grid-cols-2 z-index-5">
        <!-- Bouton précédent -->
        <div class="flex justify-start">
          <SpotlightButton
            v-if="previousProject"
            rounded
            class="pointer-events-auto p-3 rounded-full border-1 border-zinc-700 bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors text-zinc-400 hover:text-zinc-300"
            :title="previousProject?.name"
            @click="goToPreviousProject"
          >
            <Icon
              name="heroicons:chevron-left"
              class="h-6 w-6"
            />
          </SpotlightButton>
        </div>

        <!-- Bouton suivant -->
        <div class="flex justify-end">
          <SpotlightButton
            v-if="nextProject"
            rounded
            class="pointer-events-auto p-3 rounded-full border-1 border-zinc-700 bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors text-zinc-400 hover:text-zinc-300"
            :title="nextProject?.name"
            @click="goToNextProject"
          >
            <Icon
              name="heroicons:chevron-right"
              class="h-6 w-6"
            />
          </SpotlightButton>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-4xl pt-20 pb-16">
      <!-- Project header -->
      <div
        class="mb-8 flex flex-col gap-4"
        data-animate
        style="--stagger: 1"
      >
        <NuxtLink
          class="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
          to="/"
          @click.prevent="goToPrev()"
        >
          <Icon
            name="heroicons:arrow-left"
            class="h-4 w-4"
          />
          {{ t('projects.back') }}
        </NuxtLink>

        <h1 class="text-3xl md:text-4xl font-newsreader italic text-zinc-300 text-white-shadow">
          {{ project.name }}
        </h1>
      </div>

      <!-- Image principale -->
      <div
        class="relative aspect-video w-full overflow-hidden rounded-lg mb-8"
        data-animate
        style="--stagger: 2"
      >
        <Img
          :src="project.image"
          :alt="project.name"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <!-- Tags -->
      <div
        class="flex flex-wrap gap-2 mb-8"
        data-animate
        style="--stagger: 3"
      >
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-400"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Description -->
      <div
        class="writing mb-8"
        data-animate
        style="--stagger: 5"
      >
        <h2 class="text-lg md:text-4xl font-newsreader text-zinc-300">
          {{ project.description }}
        </h2>
        <div
          class="mt-4 text-zinc-400"
          v-html="project.content"
        />
      </div>

      <!-- Technologies -->
      <div
        v-if="project.technologies"
        class="mb-8"
        data-animate
        style="--stagger: 4"
      >
        <h3 class="text-xl font-newsreader italic text-zinc-400 mb-4">
          {{ t('projects.technologies') }}
        </h3>
        <div class="flex flex-col gap-4">
          <!-- Frontend -->
          <div
            v-if="project.technologies?.frontend?.length"
            class="flex flex-col gap-2"
          >
            <h3 class="text-zinc-400 text-sm font-medium">
              Frontend
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies.frontend"
                :key="tech"
                class="rounded-full bg-zinc-800/50 px-3 py-1 text-sm text-zinc-400"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          <!-- Backend -->
          <div
            v-if="project.technologies?.backend?.length"
            class="flex flex-col gap-2"
          >
            <h3 class="text-zinc-400 text-sm font-medium">
              Backend
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies.backend"
                :key="tech"
                class="rounded-full bg-zinc-800/50 px-3 py-1 text-sm text-zinc-400"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Liens -->
      <div
        class="flex flex-wrap gap-4"
        data-animate
        style="--stagger: 5"
      >
        <NuxtLink
          v-for="link in project.url"
          :key="link.url"
          :to="link.url"
          target="_blank"
          class="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-zinc-300 hover:bg-zinc-700 transition-colors"
        >
          <Icon
            :name="link.type === 'demo' ? 'heroicons:play' : 'heroicons:code-bracket'"
            class="h-4 w-4"
          />
          {{ link.name[locale] }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
