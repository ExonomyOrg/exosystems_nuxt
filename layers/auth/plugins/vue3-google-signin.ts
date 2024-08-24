import { defineNuxtPlugin } from '#app'
import googleSignIn  from 'vue3-google-signin'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(googleSignIn, {
    clientId: '625192695272-fploh19ppqhqbta1nnsadn3gug6fi5hr.apps.googleusercontent.com', // Replace with your actual client ID
  })
})
