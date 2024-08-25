import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    'nuxt-vue3-google-signin',
  ],
  googleSignIn: {
    clientId: '625192695272-fploh19ppqhqbta1nnsadn3gug6fi5hr.apps.googleusercontent.com',
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
