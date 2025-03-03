<script setup>
const { locale: currentLocale, setLocale } = useI18n()

const availableLocales = computed(() => [
  { name: 'FR', code: 'fr' },
  { name: 'EN', code: 'en' },
])

const switchLanguage = async (locale) => {
  await setLocale(locale)
}
</script>

<template>
  <div class="z-99 flex items-center gap-3 rounded-lg border border-white/10 bg-zinc-900/90 px-3 py-1 backdrop-blur-xl">
    <ClientOnly>
      <button
        v-for="locale in availableLocales"
        :key="locale.code"
        class="cursor-pointer select-none"
        @click="switchLanguage(locale.code)"
      >
        <span
          class="font-semibold"
          :class="locale.code === currentLocale ? 'text-zinc-200' : 'text-neutral-500'"
        >
          {{ locale.name }}
        </span>
      </button>
      <template #fallback>
        <div class="h-2 w-5" />
      </template>
    </ClientOnly>
  </div>
</template>
