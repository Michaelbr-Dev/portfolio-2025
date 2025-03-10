<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="relative -mt-12 bg-zinc-950">
    <!-- grid background -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-grid-pattern opacity-[0.03]"
        style="mask-image: radial-gradient(circle at center, black, transparent 80%)"
      />
    </div>

    <div class="relative mx-auto flex max-w-7xl flex-col justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8 lg:py-8">
      <!-- spotlight -->
      <div
        class="absolute -top-8 left-1/2 size-72 -translate-x-1/2 rounded-full bg-white/25 blur-[120px] lg:-top-8 lg:size-[32rem] lg:blur-[200px]"
      />

      <!-- profile picture -->
      <HeroProfilePicture />

      <div class="z-20 flex flex-col items-center justify-center">
        <!-- title -->
        <div
          class="font-geist"
          style="--stagger: 1; --delay: 10ms"
          data-animate
        >
          <h1 class="mx-auto font-medium text-center text-pretty bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-3xl text-transparent lg:max-w-3xl lg:text-4xl">
            {{ t('global.home.title') }}
          </h1>

          <!-- subtitle -->
          <h2 class="mx-auto mt-4 max-w-xl text-center text-lg antialiased text-white/60">
            {{ t('global.home.subtitle') }}
          </h2>
        </div>

        <SettingsAvailability
          background
          class="mt-2"
          style="--stagger: 2"
          data-animate
        />

        <!-- social -->
        <HeroSocial
          style="--stagger: 3"
          data-animate
        />

        <!-- cta -->
        <HeroCTA
          style="--stagger: 4"
          data-animate
        />
      </div>
    </div>
  </section>
</template>
