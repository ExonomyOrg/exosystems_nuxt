<template>
    <div class="settings">
        <h1 class="settings-heading">Settings</h1> <!-- Added heading -->

        <div class="setting-item">
            <label for="theme">Select Theme:</label>
            <select v-model="theme" @change="updateTheme" class="theme-select">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>

        <div class="setting-item">
            <label for="notifications">Enable Notifications:</label>
            <input type="checkbox" v-model="notifications" @change="toggleNotifications"
                class="notification-checkbox" />
        </div>
    </div>
</template>

<script setup>
import { usePreferencesStore } from '~/stores/preferences'
import { onMounted } from 'vue'

// Access the store
const preferencesStore = usePreferencesStore()

// Initialize preferences on component mount
onMounted(() => {
    preferencesStore.initializePreferences()
})

// Reactive references directly from the store
const theme = preferencesStore.theme
const notifications = preferencesStore.notifications

// Methods to modify preferences
const updateTheme = () => {
    preferencesStore.setTheme(theme)
}

const toggleNotifications = () => {
    preferencesStore.toggleNotifications()
}
</script>

<style scoped>
.settings {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* Align items to the left */
    margin-left: 20px;
    /* Slight margin from the left */
}

.settings-heading {
    font-size: 24px;
    /* Adjust font size */
    font-weight: bold;
    /* Make it bold */
    margin-bottom: 20px;
    /* Space below the heading */
}

.setting-item {
    margin-bottom: 15px;
}

label {
    margin-right: 10px;
    /* Space between label and input */
    font-weight: bold;
}

.theme-select {
    padding: 5px;
}

.notification-checkbox {
    transform: scale(1.5);
    margin-left: 10px;
}
</style>
