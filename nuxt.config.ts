// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Bubblegum Sans&display=swap' },
      ],
    },
  },
  css: [
    '@/assets/css/main.scss',
  ],
  devtools: { enabled: true },
  // https://nuxt.com/docs/getting-started/configuration
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: process.env.NUXT_API_SECRET,
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
      apiSecretPublic: process.env.NUXT_API_SECRET_PUBLIC,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '@/assets/css/_variables.scss';
          `,
        },
      },
    },
  },
});
