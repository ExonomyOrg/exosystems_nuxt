import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    'nuxt-vue3-google-signin'
  ],
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
  compatibilityDate: '2024-07-12'
});
