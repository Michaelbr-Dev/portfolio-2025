<script setup lang="ts">
const { t } = useI18n()
const { profile } = useAppConfig()

// Form data
const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

// Form errors
const errors = ref({
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Phone validation (format international)
const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/

const validateForm = () => {
  let isValid = true
  errors.value = {
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  }

  // Required fields validation
  if (!formData.value.fullName.trim()) {
    errors.value.fullName = t('contact.errors.required')
    isValid = false
  }

  if (!formData.value.email.trim()) {
    errors.value.email = t('contact.errors.required')
    isValid = false
  }
  else if (!emailRegex.test(formData.value.email)) {
    errors.value.email = t('contact.errors.invalidEmail')
    isValid = false
  }

  if (formData.value.phone.trim() && !phoneRegex.test(formData.value.phone)) {
    errors.value.phone = t('contact.errors.invalidPhone')
    isValid = false
  }

  if (!formData.value.subject.trim()) {
    errors.value.subject = t('contact.errors.required')
    isValid = false
  }

  if (!formData.value.message.trim()) {
    errors.value.message = t('contact.errors.required')
    isValid = false
  }

  return isValid
}

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  if (validateForm()) {
    try {
      const response = await $fetch<{ success: boolean, message: string }>('/api/SendMail', {
        method: 'POST',
        body: formData.value,
      })

      if (response.success) {
        formData.value = {
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        }

        toast(t('contact.success'), {
          type: 'success',
        })
      }
      else {
        toast(t('contact.errors.error'), {
          type: 'error',
        })
      }
    }
    catch (error) {
      console.error('Form submission error:', error)
      toast(t('contact.errors.error'), {
        type: 'error',
      })
    }
  }
  else {
    toast(t('contact.errors.validation'), {
      type: 'warning',
    })
  }
}
</script>

<template>
  <section class="relative -mt-14 bg-zinc-950">
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-grid-pattern opacity-[0.03]"
      />
    </div>
    <div class="relative mx-auto flex max-w-7xl flex-col justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8 lg:py-8">
      <div class="mt-16 p-2 flex flex-col gap-1">
        <h3 class="text-zinc-300 text-white-shadow text-center font-newsreader italic text-3xl sm:text-3xl md:text-4xl">
          {{ t('contact.title') }}
        </h3>
        <p class="text-zinc-400 text-center">
          {{ t('contact.description') }}
        </p>
      </div>
      <Divider />
      <div class="flex flex-col items-center justify-between">
        <form
          class="w-full max-w-2xl space-y-4"
          @submit="handleSubmit"
        >
          <div class="grid grid-cols-1 gap-4">
            <!-- Full Name -->
            <div class="col-span-1">
              <label
                for="fullName"
                class="block text-sm font-medium text-zinc-300"
              >
                {{ t('contact.fullname') }}
              </label>
              <input
                id="fullName"
                v-model="formData.fullName"
                type="text"
                class="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-300 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                :class="errors.fullName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-zinc-700 focus:border-zinc-400 focus:ring-zinc-400'"
                placeholder="John Doe"
              >
              <p
                v-if="errors.fullName"
                class="mt-1 text-sm text-red-500"
              >
                {{ errors.fullName }}
              </p>
            </div>

            <!-- Email -->
            <div class="col-span-1">
              <label
                for="email"
                class="block text-sm font-medium text-zinc-300"
              >
                {{ t('contact.email') }}
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                class="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-300 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                :class="errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-zinc-700 focus:border-zinc-400 focus:ring-zinc-400'"
                placeholder="john.doe@gmail.com"
              >
              <p
                v-if="errors.email"
                class="mt-1 text-sm text-red-500"
              >
                {{ errors.email }}
              </p>
            </div>

            <!-- Phone -->
            <div class="col-span-1">
              <label
                for="phone"
                class="block text-sm font-medium text-zinc-300"
              >
                {{ t('contact.phone') }}
              </label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                class="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-300 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                :class="errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-zinc-700 focus:border-zinc-400 focus:ring-zinc-400'"
                placeholder="+33 6 12 34 56 78"
              >
              <p
                v-if="errors.phone"
                class="mt-1 text-sm text-red-500"
              >
                {{ errors.phone }}
              </p>
            </div>

            <!-- Subject -->
            <div class="col-span-1">
              <label
                for="subject"
                class="block text-sm font-medium text-zinc-300"
              >
                {{ t('contact.subject') }}
              </label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                class="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-300 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                :class="errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-zinc-700 focus:border-zinc-400 focus:ring-zinc-400'"
                :placeholder="$t('contact.subjectPlaceholder')"
              >
              <p
                v-if="errors.subject"
                class="mt-1 text-sm text-red-500"
              >
                {{ errors.subject }}
              </p>
            </div>

            <!-- Message -->
            <div class="col-span-1">
              <label
                for="message"
                class="block text-sm font-medium text-zinc-300"
              >
                {{ t('contact.message') }}
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                class="mt-1 block w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-300 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                :class="errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-zinc-700 focus:border-zinc-400 focus:ring-zinc-400'"
                :placeholder="$t('contact.messagePlaceholder')"
              />
              <p
                v-if="errors.message"
                class="mt-1 text-sm text-red-500"
              >
                {{ errors.message }}
              </p>
            </div>
          </div>

          <div class="w-full">
            <button
              type="submit"
              class="w-full rounded-md bg-zinc-600 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-400 focus:outline-none"
            >
              {{ t('contact.submit') }}
            </button>
          </div>
        </form>
        <Divider class="my-10" />
        <div class="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <div class="flex flex-col gap-3">
            <dd class="flex items-center gap-3 text-neutral-400">
              <Icon
                name="i-heroicons:phone"
                class="size-6"
                aria-hidden="true"
              />
              <span>
                {{ profile.phone }}
              </span>
            </dd>
            <dd class="flex items-center gap-3 text-neutral-400">
              <Icon
                name="i-heroicons:envelope"
                class="size-6"
                aria-hidden="true"
              />
              <NuxtLink
                :to="`mailto:${profile.email}`"
                class="cursor-pointer transition-colors duration-300"
              >
                {{ profile.email }}
              </NuxtLink>
            </dd>
          </div>
          <div>
            <MeetingButton />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus {
  -webkit-text-fill-color: rgb(212 212 216);
  -webkit-box-shadow: 0 0 0px 1000px rgb(24 24 27) inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
