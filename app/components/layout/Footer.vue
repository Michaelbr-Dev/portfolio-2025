<template>
  <div class="pb-10 bg-zinc-950">
    <Divider />
    <footer class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6">
      <Logo :size="8" />
      <span class="text-center text-sm text-muted text-zinc-300">
        © {{ new Date().getFullYear() }}, <NuxtLink to="https://www.michaelbr-dev.fr/"> Michael Briquet</Nuxtlink> - {{ $t("global.all_rights_reserved") }}.
      </span>
    </footer>
  </div>
</template>
