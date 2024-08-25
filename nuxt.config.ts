import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    'nuxt-vue3-google-signin',
  ],
  googleSignIn: {
    clientId: '72780742121-4j4tl98s5g99fmmcneked3d1pdnn7p9l.apps.googleusercontent.com',
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
      databasePath: process.env.DATABASE_PATH || './dev.db',
      // Add other private config here
    },
  },
  compatibilityDate: '2024-07-12'
});
