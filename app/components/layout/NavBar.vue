<script setup>
const { t } = useI18n()
const navigation = getNavigation('home')

const route = useRoute()

// Fonction pour vérifier si un lien est actif
const isActive = (path) => {
  if (path === '/') {
    return route.path === '/' || route.path === ''
  }
  return route.path === path
}
</script>

<template>
  <div class="mx-auto my-1 flex w-full items-center justify-center text-zinc-400">
    <header class="rounded-full">
      <SpotlightButton
        rounded
        transparent
        :animate="false"
        class="border border-white/10"
      />
      <nav
        class="z-10 flex h-[50px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out sm:h-[45px] sm:hover:gap-4"
      >
        <div class="flex items-center gap-1 rounded-full border border-white/10 bg-zinc-900/90 px-3 py-2 backdrop-blur-xl transition-transform hover:scale-[1.10]">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            :title="t(`navigation.${item.name.toLowerCase()}`)"
            :aria-label="t(`navigation.${item.name.toLowerCase()}`)"
            class="flex items-center rounded-full border border-transparent px-4 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-zinc-900/50 hover:backdrop-blur-3xl hover:text-zinc-200 sm:px-6"
            :class="[
              isActive(item.to)
                ? 'border border-white/5 bg-zinc-900/10 text-white/75 shadow-2xl shadow-white/50 backdrop-blur-3xl text-shadow-sm'
                : 'text-muted',
            ]"
          >
            <Icon
              :name="item.icon"
              class="size-7 font-light sm:size-6"
            />
          </NuxtLink>
        </div>
      </nav>
    </header>
  </div>
</template>
