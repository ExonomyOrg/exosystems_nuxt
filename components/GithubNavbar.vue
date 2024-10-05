<template>
    <div class="github-dashboard">
        <!-- Horizontal Navbar -->
        <div class="navbar">
            <button :class="{ 'active-tab': currentTab === 'UserInfo' }" @click="setTab('UserInfo')">
                User Information
            </button>
            <button :class="{ 'active-tab': currentTab === 'Contributions' }" @click="setTab('Contributions')">
                Contributions
            </button>
            <button :class="{ 'active-tab': currentTab === 'AssignedIssues' }" @click="setTab('AssignedIssues')">
                Assigned Issues
            </button>
        </div>

        <!-- Conditional Rendering of Components -->
        <div class="component-container">
            <UserInfo v-if="currentTab === 'UserInfo'" :user="user" />
            <Contributions v-if="currentTab === 'Contributions'" :selectedRepo="selectedRepo"
                :contributions="contributions" @update:selectedRepo="updateSelectedRepo" />
            <AssignedIssues v-if="currentTab === 'AssignedIssues'" :assignedIssues="assignedIssues" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import UserInfo from '~/components/UserInfo.vue';
import Contributions from '~/components/Contributions.vue';
import AssignedIssues from '~/components/AssignedIssues.vue';

const props = defineProps({
    selectedRepo: String,
    contributions: Array,
    assignedIssues: Array,
    user: Object,
});

const currentTab = ref('UserInfo'); // Default tab

// Function to update the selected tab
const setTab = (tab) => {
    currentTab.value = tab;
};

// Update the selected repo in parent component
const updateSelectedRepo = (newRepo) => {
    emit('update:selectedRepo', newRepo);
};

const emit = defineEmits(['update:selectedRepo']);
</script>

<style scoped>
.github-dashboard {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
        /* Optional: Set a max-width to constrain its size */
        margin: 0 auto;
        /* Center the navbar horizontally */
        width: 100%;
            /* Ensure it takes the full width of the parent */
}

.navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* Center align items vertically */
    background-color: #333;
    padding: 1rem;
    width: 100%;
    /* Ensure it takes the full width of the parent */
    max-width: 1200px;
    /* Optional: Set a max-width to constrain its size */
    margin: 0 auto;
    /* Center the navbar horizontally */
}

.navbar button {
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    flex: 1;
    /* Allow buttons to take equal space */
    text-align: center;
    /* Center text inside buttons */
}

.navbar button.active-tab {
    border-bottom: 2px solid #7bcbed;
}

.navbar button:hover {
    color: #7bcbed;
}

.component-container {
    margin-top: 1rem;
    padding: 1rem;
}
</style>
