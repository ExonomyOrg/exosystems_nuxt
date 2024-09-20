import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    'nuxt-vue3-google-signin',
  ],
  plugins: [
    '~/plugins/pinia.ts',
  ],
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  app: {
    head: {
      title: 'Exosystems',
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/favicon.jpg' }
      ]
    }
  },
  css: [
    '@/assets/global.css'
  ],
  runtimeConfig: {
    private: {
      databasePath: process.env.DATABASE_PATH || './layers/storage/databases/sql/dev.db',
      // Add other private config here
    },
  },
  compatibilityDate: '2024-07-12'
});
