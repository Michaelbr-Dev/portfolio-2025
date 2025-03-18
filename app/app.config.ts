export default defineAppConfig({
  global: {
    meetingLink: 'https://cal.com/michaelbr-dev/meeting',
    available: true,
  },
  profile: {
    name: 'Michael Briquet',
    job: 'Développeur Web Full-Stack',
    email: 'contact@michael-briquet.dev',
    phone: '(+33) 7 81 47 59 12',
    picture: 'https://avatars.githubusercontent.com/u/101110845?v=4',
  },
  socials: {
    github: 'https://github.com/Michaelbr-Dev/',
    linkedin: 'https://www.linkedin.com/in/michael-briquet/',
  },
  seo: {
    title: 'Nuxt portfolio of Michael Briquet',
    description: 'Portfolio personnel, simple et épuré, fait avec Nuxt et Tailwind CSS. Réalisé avec ❤\uFE0F par Michael Briquet',
    url: 'https://www.michael-briquet.dev/',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'i-lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
