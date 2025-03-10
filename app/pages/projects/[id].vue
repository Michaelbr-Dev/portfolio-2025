<script setup lang="ts">
import { useI18n } from '#imports'

const route = useRoute()
const { getProject } = useProjects()
const { t, locale } = useI18n()

const project = computed(() => getProject(route.params.id as string))

// Redirection if project not found
if (!project.value) {
  navigateTo('/')
}

useHead(() => ({
  title: project.value ? `${project.value.name} - Portfolio` : t('global.notFound'),
  meta: [
    {
      name: 'description',
      content: project.value?.description || '',
    },
  ],
}))
</script>

<template>
  <div
    v-if="project"
    class="min-h-screen bg-zinc-950 px-4 -mt-12 pt-8 pb-6"
  >
    <div class="mx-auto max-w-4xl pt-20 pb-16">
      <!-- Project header -->
      <div
        class="mb-8 flex flex-col gap-4"
        data-animate
        style="--stagger: 1"
      >
        <NuxtLink
          to="/"
          class="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
        >
          <Icon
            name="heroicons:arrow-left"
            class="h-4 w-4"
          />
          {{ t('global.projects.back') }}
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
        class="mb-8"
        data-animate
        style="--stagger: 4"
      >
        <h3 class="text-xl font-newsreader italic text-zinc-400 mb-4">
          {{ t('global.projects.technologies') }}
        </h3>
        <div class="flex flex-col gap-4">
          <!-- Frontend -->
          <div
            v-if="project.technologies.frontend.length > 0"
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
            v-if="project.technologies.backend.length > 0"
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
