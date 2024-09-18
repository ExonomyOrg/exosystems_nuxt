<template>
  <div class="contributions">
    <h2>Your Contributions to {{ selectedRepo }}
      <select v-model="selectedRepo" @change="fetchContributions" class="repo-dropdown">
        <option value="exosystems_nuxt">exosystems_nuxt</option>
        <option value="Exonomy">Exonomy</option>
        <option value="ExoTheme">ExoTheme</option>
      </select>
    </h2>
    <ul>
      <li v-for="contribution in contributions" :key="contribution.sha">
        <p><strong>Branch:</strong> {{ contribution.branch }}</p>
        <p><strong>Commit Message:</strong> {{ contribution.commit.message }}</p>
        <p><strong>Date:</strong> {{ new Date(contribution.commit.committer.date).toLocaleDateString() }}</p>
      </li>
    </ul>
    <div v-if="contributions.length === 0">
      <p>No contributions found for this repository.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  contributions: {
    type: Array,
    required: true
  },
  selectedRepo: {
    type: String,
    required: true
  }
});

// Emit an event to trigger the fetchContributions method
const emit = defineEmits(['updateRepo']);
const fetchContributions = () => {
  emit('updateRepo', selectedRepo);
};
</script>

<style scoped>
/* Add your styles for the Contributions section */
.repo-dropdown {
  margin-left: 10px;
}
</style>
