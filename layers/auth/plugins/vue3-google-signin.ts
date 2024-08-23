import { defineNuxtPlugin } from '#app'
import googleSignIn  from 'vue3-google-signin'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(googleSignIn, {
    clientId: 'YOUR_ACTUAL_CLIENT_ID_FROM_GOOGLE_CONSOLE', // Replace with your actual client ID
  })
})
