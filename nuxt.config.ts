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
    public: {
      apiUrl: process.env.API_URL,
      githubClientId: process.env.GITHUB_CLIENT_ID,
    },
    private: {
      secretApiKey: process.env.GITHUB_CLIENT_SECRET, // Only accessible server-side
    },
  },
  compatibilityDate: '2024-10-2',
});
