<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="relative -mt-14 bg-zinc-950">
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-grid-pattern opacity-[0.03]"
      />
    </div>
    <div class="relative mx-auto flex max-w-4xl flex-col justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8 lg:py-8">
      <!-- spotlight -->
      <div
        class="absolute -top-8 left-1/2 size-72 -translate-x-1/2 rounded-full lg:-top-8 lg:size-[32rem] lg:blur-[200px]"
      />
      <div class="mt-16 p-2 flex flex-col gap-1">
        <h1 class="font-newsreader text-zinc-300 italic text-white-shadow text-center text-4xl">
          {{ t('about.title') }}
        </h1>
        <h2 class="text-center text-zinc-400 text-lg font-extralight italic">
          {{ t('about.subtitle') }}
        </h2>
      </div>
      <Divider class="mb-8 mt-2" />
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <AboutProfilePicture />
        <div class="relative flex flex-col gap-3 sm:ml-4">
          <h3 class="text-lg text-zinc-400">
            Intro
          </h3>
          <div class="mb-4 flex flex-col gap-4 text-primary">
            <p class="text-zinc-400">
              {{ t('about.item1') }}
            </p>
            <p class="text-zinc-400">
              {{ t('about.item2') }}
            </p>
            <p class="text-zinc-400">
              {{ t('about.item3') }}
            </p>
            <p class="text-zinc-400">
              {{ t('about.item4') }}
            </p>
          </div>
        </div>
      </div>
      <Divider class="my-8" />
      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-1">
          <h3 class="text-white-shadow font-newsreader italic text-zinc-400 text-3xl">
            {{ t('about.stack_title') }}
          </h3>
          <p class="text-zinc-400">
            {{ t('about.stack_subtitle') }}
          </p>
        </div>
        <AboutSkills />
      </div>
    </div>
  </section>
</template>
