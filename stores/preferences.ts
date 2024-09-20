import { defineStore } from 'pinia'

export const usePreferencesStore = defineStore('preferences', {
    state: () => ({
        theme: 'light', // default value
        notifications: true, // default value
        user_form_acess: false,
    }),
    actions: {
        setTheme(theme: string) {
            this.theme = theme
            localStorage.setItem('theme', theme)
        },
        toggleNotifications() {
            this.notifications = !this.notifications
            localStorage.setItem('notifications', JSON.stringify(this.notifications))
        },
        initializePreferences() {
            const storedTheme = localStorage.getItem('theme')
            const storedNotifications = localStorage.getItem('notifications')

            if (storedTheme) {
                this.theme = storedTheme
            }
            if (storedNotifications) {
                this.notifications = JSON.parse(storedNotifications)
            }
        },
    },
})
