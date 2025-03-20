<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()
</script>

<template>
  <Html
    :lang="locale"
  >
    <Body>
      <LayoutScrollToTop />
      <NuxtLayout>
        <UApp :locale="locales[locale]">
          <NuxtPage />
        </UApp>
      </NuxtLayout>
      <Toaster
        position="top-center"
        expand
        rich-colors
      />
    </Body>
  </Html>
</template>
