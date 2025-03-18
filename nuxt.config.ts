// https://nuxt.com/docs/api/configuration/nuxt-config
import Tailwind from '@tailwindcss/vite'

export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    'vue-sonner/nuxt',
  ],
  ssr: false,
  imports: {
    presets: [
      {
        from: 'vue-sonner',
        imports: ['toast'],
      },
    ],
  },
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    EMAIL_USER: '',
    APP_PASSWORD: '',
    EMAIL_RECIPIENT: '',
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [Tailwind()],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US' },
      { code: 'fr', name: 'French', language: 'fr-FR' },
    ],
    strategy: 'prefix',
    defaultLocale: 'fr',
    vueI18n: '../app/i18n.config.ts',
  },
  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
      {
        prefix: 'logo',
        dir: './app/assets/logos',
      },
    ],
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
    provider: 'iconify',
  },
  image: {
    provider: 'ipx',
    dir: 'public/images',
    domains: ['localhost'],
  },
})
