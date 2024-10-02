// plugins/pinia.ts
import { defineNuxtPlugin } from '#app'
import { createPinia, setActivePinia } from 'pinia'

export default defineNuxtPlugin((nuxtApp) => {
    const pinia = createPinia()
    nuxtApp.vueApp.use(pinia)

    // Set active pinia on the server-side
    if (process.server) {
        setActivePinia(pinia)
    }
})
