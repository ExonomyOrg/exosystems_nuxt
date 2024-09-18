<template>
  <div class="assigned-issues">
    <h2>Assigned Issues</h2>
    <ul v-if="assignedIssues.length > 0">
      <li v-for="issue in assignedIssues" :key="issue.id">
        <a :href="issue.html_url" target="_blank">{{ issue.title }}</a>
        <p>Status: {{ issue.state }}</p>
      </li>
    </ul>
    <div v-else>
      <p>No assigned issues found.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  assignedIssues: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
/* Add your styles for the Assigned Issues section */
</style>
